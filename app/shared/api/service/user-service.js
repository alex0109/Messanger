const bcrypt = require("bcrypt");
const uuid = require("uuid");

const UserDto = require("../dtos/user-dto");
const UserModel = require("../models/user");

const mailService = require("./mail-service");
const tokenService = require("./token-service");

class UserService {
  async registration(email, password) {
    //Ищем пользователя по почте
    const candidate = await UserModel.findOne({ email });
    //Проверяем его существование
    if (candidate) {
      throw new Error("User with this email has already exist");
    }

    //Хешируем пароль, чтобы он не хранился в открытом виде в бд
    const hashPassword = await bcrypt.hash(password, 3);
    //Создаем ссылку для активации почты
    const activationLink = uuid.v4();

    //Создаем пользователя в бд
    const user = await UserModel.create({
      email,
      password: hashPassword,
      activationLink,
    });
    //Отправляем активационное письмо
    await mailService.sendActiovationMail(
      email,
      `${process.env.API_URL}/api/activate/${activationLink}`
    );

    //Берем из данных пользователя только безопастную информацию
    const userDto = new UserDto(user);
    //Создаем токены в которые ложим эту безопастную информацию
    const tokens = tokenService.generateTokens({ ...userDto });
    //Сохраняем токен обновления в бд
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    //Возвращаем только нужную информацию
    return { ...tokens, user: userDto };
  }
}

module.exports = new UserService();
