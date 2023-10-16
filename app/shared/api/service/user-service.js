const bcrypt = require("bcrypt");

const UserDto = require("../dtos/user-dto");
const ApiError = require("../exceptions/api-error");
const UserModel = require("../models/user");

const tokenService = require("./token-service");

class UserService {
  async registration(email, password) {
    //Ищем пользователя по почте
    const candidate = await UserModel.findOne({ email });
    //Проверяем его существование
    if (candidate) {
      throw ApiError.BadRequest("User with this email has already exist");
    }

    //Хешируем пароль, чтобы он не хранился в открытом виде в бд
    const hashPassword = await bcrypt.hash(password, 3);

    //Создаем пользователя в бд
    const user = await UserModel.create({
      email,
      password: hashPassword,
    });

    //Берем из данных пользователя только безопастную информацию
    const userDto = new UserDto(user);
    //Создаем токены в которые ложим эту безопастную информацию
    const tokens = tokenService.generateTokens({ ...userDto });
    //Сохраняем токен обновления в бд
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    //Возвращаем только нужную информацию
    return { ...tokens, user: userDto };
  }

  async login(email, password) {
    const user = await UserModel.findOne({ email });

    if (!user) {
      throw ApiError.BadRequest("User with this email was not found");
    }

    const isPassEquals = await bcrypt.compare(password, user.password);

    if (!isPassEquals) {
      throw ApiError.BadRequest("Not valid password");
    }

    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }

  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError();
    }
    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);

    if (!userData || !tokenFromDb) {
      throw ApiError.UnauthorizedError();
    }

    const user = await UserModel.findById(userData.id);
    const userDto = new UserDto(user);

    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }
}

module.exports = new UserService();
