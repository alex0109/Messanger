//Берем метод валидации результата запроса
const { validationResult } = require("express-validator");

const ApiError = require("../exceptions/api-error");
const tokenService = require("../service/token-service");
const userService = require("../service/user-service");

//Класс для роботы с сервером
class UserController {
  //Контроллер регистрации
  async registration(req, res, next) {
    try {
      //Берем массив ошибкок из запроса
      const errors = validationResult(req);

      //Проверяем пустой он или нет, если нет, то возвращаем ошибку и массивом ошибок
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest("Error while validating inputs", errors.array()));
      }

      //Берем почту и пароль из тела запроса
      const { email, password } = req.body;
      //Прокидуем пользователя в бд и даем токены
      const userData = await userService.registration(email, password);
      //Создаем куки токена обновления с сроком жизни месяц
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });

      //Возвращаеи пользователя и токены
      return res.json(userData);
    } catch (error) {
      next(error);
    }
  }

  //Контроллер логина
  async login(req, res, next) {
    try {
      //Берем почту и пароль из тела запроса
      const { email, password } = req.body;
      //Проверяем пользователя с помощью сервиса и даем токены
      const userData = await userService.login(email, password);

      //Создаем куки токена обновления с сроком жизни месяц
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });

      //Возвращаеи пользователя и токены
      return res.json(userData);
    } catch (error) {
      next(error);
    }
  }

  //Контроллер выхода
  async logout(req, res, next) {
    try {
      //Берем токен обновления из куки
      const { refreshToken } = req.cookies;

      //Удаляем токен из бд
      const token = await userService.logout(refreshToken);

      //Удаляем токен из куки
      res.clearCookie("refreshToken");

      //Возвращаем ответ бд и код 200
      return res.status(200).json(token);
    } catch (error) {
      next(error);
    }
  }

  //Контроллер активации пользователя
  async activate(req, res, next) {
    try {
      return res.json(req.body);
    } catch (error) {
      next(error);
    }
  }

  //Контроллер обновления токенов обновления
  async refresh(req, res, next) {
    try {
      //Берем токен из куки
      const { refreshToken } = req.cookies;
      //Проверяем токен обновления и создаем новые токены
      const userData = await userService.refresh(refreshToken);

      //Создаем куки токена обновления с сроком жизни месяц
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });

      //Возвращаеи пользователя и токены
      return res.json(userData);
    } catch (error) {
      next(error);
    }
  }

  //Контроллер получения всех пользователей
  async getUsers(req, res, next) {
    try {
      const users = await userService.getAllUsers();
      return res.json(users);
    } catch (error) {
      next(error);
    }
  }

  //Контроллер получения одного пользователя
  async getOneUser(req, res, next) {
    try {
      const userID = req.params.userID;

      const user = await userService.findUserById(userID);
      return res.json(user);
    } catch (error) {
      next(error);
    }
  }

  //Контроллер для обновления пользователя
  async updateUser(req, res, next) {
    try {
      const userID = req.params.userID;
      const updates = req.body;

      const updated = await userService.updateUser(userID, updates);
      return res.json(updated);
    } catch (error) {
      next(error);
    }
  }

  //Контроллер отправки запроса в друзья
  async sendFriendRequest(req, res, next) {
    try {
      const receiverID = req.params.receiverID;
      const { refreshToken } = req.cookies;
      const { firstMessage } = req.body;

      const userData = await tokenService.validateRefreshToken(refreshToken);

      const requestResponse = await userService.sendFriendRequest(
        userData.id,
        receiverID,
        firstMessage
      );

      res.json({
        message: requestResponse.message,
        firstMessage,
        sender: userData.id,
        receiverID,
        requestID: requestResponse.requestID,
      });
    } catch (error) {
      next(error);
    }
  }

  //Контроллер для принятия запроса в друзья
  async acceptFriendRequest(req, res, next) {
    try {
      const receiverID = req.params.receiverID;
      const { refreshToken } = req.cookies;

      const userData = await tokenService.validateRefreshToken(refreshToken);

      const { message, requestID, firstMessage } = await userService.respondToFriendRequest(
        userData.id,
        receiverID,
        true
      );

      res.json({ message, requestID, firstMessage });
    } catch (error) {
      next(error);
    }
  }

  //Контроллер для отклонения запроса в друзья
  async rejectFriendRequest(req, res, next) {
    try {
      const receiverID = req.params.receiverID;
      const { refreshToken } = req.cookies;

      const userData = await tokenService.validateRefreshToken(refreshToken);

      const { message, requestID } = await userService.respondToFriendRequest(
        userData.id,
        receiverID,
        false
      );

      res.json({ message, requestID });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();
