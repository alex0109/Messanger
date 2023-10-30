//Для криптографии
const bcrypt = require("bcrypt");

//Для взятия только нужных данных
const UserDto = require("../dtos/user-dto");
//Для обработки ошибок
const ApiError = require("../exceptions/api-error");
//Для работы с моделью пользователя в бд
const FRModel = require("../models/friend-request");
const UserModel = require("../models/user");

//Для работы с токенами
const tokenService = require("./token-service");

//Создаем класс с методами работы с пользователем и бд
class UserService {
  //Метод регистрации
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

  //Метод логина
  async login(email, password) {
    //Ищем пользователя по почте
    const user = await UserModel.findOne({ email });

    //Если нету возвращем ошибку
    if (!user) {
      throw ApiError.BadRequest("User with this email was not found");
    }

    //Проверяем пароль и зашифрованый пароль в бд
    const isPassEquals = await bcrypt.compare(password, user.password);

    //Если не совпадают возвращем ошибку
    if (!isPassEquals) {
      throw ApiError.BadRequest("Not valid password");
    }

    //Берем только нужные данные
    const userDto = new UserDto(user);
    //Создаем токены в которые ложим безопастную информацию
    const tokens = tokenService.generateTokens({ ...userDto });
    //Сохраняем токен обновления в бд
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    //Возвращаем только нужную информацию
    return { ...tokens, user: userDto };
  }

  //Метод для выхода из аккаунта
  async logout(refreshToken) {
    //Удаляем токен из бд
    const token = await tokenService.removeToken(refreshToken);
    //Возвращаем ответ бд
    return token;
  }

  //Метод обновления токена обновления
  async refresh(refreshToken) {
    //Если токена нету кидаем ошибку
    if (!refreshToken) {
      throw ApiError.UnauthorizedError();
    }
    //Проверяем токен и вытаскиваем информацию из него
    const userData = tokenService.validateRefreshToken(refreshToken);
    //Находим токен
    const tokenFromDb = await tokenService.findToken(refreshToken);

    //Если ничего нету то кидаем ошибку
    if (!userData || !tokenFromDb) {
      throw ApiError.UnauthorizedError();
    }

    //Ищем пользователя в бд
    const user = await UserModel.findById(userData.id);
    //Берем только нужные данные
    const userDto = new UserDto(user);

    //Создаем токены, сохраняем их и возвращаем
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }

  //Метод для получения всех пользователей
  async getAllUsers() {
    const users = await UserModel.find();
    return users;
  }

  async findUserById(userId) {
    return await UserModel.findById(userId);
  }

  async sendFriendRequest(senderID, receiverID) {
    const sender = await this.findUserById(senderID);
    const receiver = await this.findUserById(receiverID);

    if (sender && receiver) {
      const alreadyRequested = sender.outgoingRequests.some((contact) =>
        contact.from.equals(receiverID)
      );

      const alreadyRequestedReceiver = receiver.incomingRequests.some(
        (contact) => contact.from.equals(receiverID)
      );

      const alreadyFriends = sender.contacts.some((contact) =>
        contact.from.equals(receiverID)
      );

      if (!alreadyRequested && !alreadyRequestedReceiver && !alreadyFriends) {
        const newFriendRequest = new FRModel({
          from: senderID,
          to: receiverID,
        });
        await newFriendRequest.save();

        sender.outgoingRequests.push(newFriendRequest._id);
        receiver.incomingRequests.push(newFriendRequest._id);
        await sender.save();
        await receiver.save();

        return { requestID: newFriendRequest.id, message: "request sent" };
      } else {
        throw ApiError.BadRequest("Already requested");
      }
    } else {
      throw ApiError.BadRequest("User didn't find");
    }
  }

  async respondToFriendRequest(userID, requesterID, accept) {
    const user = await this.findUserById(userID);
    const requester = await this.findUserById(requesterID);

    if (user && requester) {
      const request = await FRModel.findOne({
        from: requesterID,
        to: userID,
      });

      if (request !== -1 && request.status !== "accepted") {
        const acceptedRequest = await FRModel.findByIdAndUpdate(
          request.id,
          { status: "accepted" },
          { new: true }
        );

        await UserModel.updateOne(
          { _id: acceptedRequest.from },
          { $pull: { outgoingRequests: request._id } }
        );

        // Удалить ID запроса из входящих запросов получателя
        await UserModel.updateOne(
          { _id: acceptedRequest.to },
          { $pull: { incomingRequests: request._id } }
        );

        // Добавление пользователей в список друзей друг у друга
        const sender = await UserModel.findById(acceptedRequest.from);
        const receiver = await UserModel.findById(acceptedRequest.to);

        sender.contacts.push(receiver._id);

        receiver.contacts.push(sender._id);

        await sender.save();
        await receiver.save();

        return {
          message: "Request has been found",
          requestID: request,
        };
      } else {
        throw ApiError.BadRequest(
          "Request didn't find or already has been accepted"
        );
      }
    } else {
      throw ApiError.BadRequest("User didn't find");
    }
  }
}

module.exports = new UserService();
