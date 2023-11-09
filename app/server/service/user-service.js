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
const socketService = require("./socket-service");
const tokenService = require("./token-service");

//Создаем класс с методами работы с пользователем и бд
class UserService {
  //Сервис регистрации
  async registration(email, password) {
    //Ищем пользователя по почте
    const candidate = await UserModel.findOne({ email });
    //Проверяем его существование
    if (candidate) {
      throw ApiError.BadRequest("User with this email has already exist");
    }

    //Хешируем пароль, чтобы он не хранился в открытом виде в бд
    const hashPassword = await bcrypt.hash(password, 10);

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

  //Сервис логина
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

  //Сервис для выхода из аккаунта
  async logout(refreshToken) {
    //Удаляем токен из бд
    const token = await tokenService.removeToken(refreshToken);
    //Возвращаем ответ бд
    return token;
  }

  //Сервис обновления токена обновления
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

  //Сервис для получения всех пользователей
  async getAllUsers() {
    return await UserModel.find();
  }

  //Сервис для получения одного пользователя
  async findUserById(userID) {
    return await UserModel.findById(userID);
  }

  //Сервис для обновления пользователя
  async updateUser(userID, updates) {
    const user = await this.findUserById(userID);

    if (!user) {
      throw ApiError.BadRequest("User was not found");
    }

    for (const key of Object.keys(updates)) {
      if (key !== "_id" && key !== "__v") {
        user[key] = updates[key];
      }

      if (key === "socketId") {
        try {
          await socketService.saveSocket(user.id, updates.socketId);

          return { message: "Updated successfully" };
        } catch (error) {
          console.error(error);
        }
      }
    }

    await user.save();

    return { message: "Updated successfully" };
  }

  //Сервис для отправки запроса в друзья
  async sendFriendRequest(senderID, receiverID, firstMessage) {
    const sender = await this.findUserById(senderID);
    const receiver = await this.findUserById(receiverID);

    if (sender && receiver) {
      const alreadyRequested = sender.outgoingRequests.some((contact) =>
        contact.from.equals(receiverID)
      );

      const alreadyRequestedReceiver = receiver.incomingRequests.some((contact) =>
        contact.from.equals(receiverID)
      );

      const alreadyFriends = sender.contacts.some((contact) => contact.from.equals(receiverID));

      if (!alreadyRequested && !alreadyRequestedReceiver && !alreadyFriends) {
        const newFriendRequest = new FRModel({
          from: senderID,
          to: receiverID,
          firstMessage,
        });
        await newFriendRequest.save();

        sender.outgoingRequests.push(newFriendRequest._id);
        receiver.incomingRequests.push(newFriendRequest._id);
        await sender.save();
        await receiver.save();

        return {
          message: "Request has been sent",
          requestID: newFriendRequest.id,
        };
      } else {
        throw ApiError.BadRequest("Already requested");
      }
    } else {
      throw ApiError.BadRequest("User didn't find");
    }
  }

  //Сервис для ответа на заявку в друзья
  async respondToFriendRequest(userID, requesterID, accept) {
    const user = await this.findUserById(userID);
    const requester = await this.findUserById(requesterID);

    if (user && requester) {
      const request = await FRModel.findOne({
        from: requesterID,
        to: userID,
        status: "pending",
      });

      if (request !== -1 && request.status !== "accepted") {
        const respondedRequest = await FRModel.findByIdAndUpdate(
          request.id,
          { status: accept ? "accepted" : "rejected" },
          { new: true }
        );

        await UserModel.updateOne(
          { _id: respondedRequest.from },
          { $pull: { outgoingRequests: request._id } }
        );

        await UserModel.updateOne(
          { _id: respondedRequest.to },
          { $pull: { incomingRequests: request._id } }
        );

        if (accept) {
          const sender = await UserModel.findById(respondedRequest.from);
          const receiver = await UserModel.findById(respondedRequest.to);

          sender.contacts.push(receiver._id);

          receiver.contacts.push(sender._id);

          await sender.save();
          await receiver.save();

          return {
            message: "Request has been accepted",
            requestID: request._id,
            firstMessage: request.firstMessage,
          };
        }

        return {
          message: "Request has been rejected",
          requestID: request._id,
        };
      } else {
        throw ApiError.BadRequest("Request didn't find or already has been accepted");
      }
    } else {
      throw ApiError.BadRequest("User didn't find");
    }
  }
}

module.exports = new UserService();
