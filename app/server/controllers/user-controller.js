//Берем метод валидации результата запроса
const { validationResult } = require("express-validator");

const ApiError = require("../exceptions/api-error");
const userService = require("../service/user-service");
const tokenService = require("../service/token-service");

//Класс для роботы с сервером
class UserController {
  //Метод регистрации
  async registration(req, res, next) {
    try {
      //Берем массив ошибкок из запроса
      const errors = validationResult(req);

      //Проверяем пустой он или нет, если нет, то возвращаем ошибку и массивом ошибок
      if (!errors.isEmpty()) {
        return next(
          ApiError.BadRequest("Error while validating inputs", errors.array())
        );
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

  //Метод логина
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

  //Метод выхода
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

  //Метод активации пользователя
  async activate(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  }

  //Метод обновления токенов обновления
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

  //Метод получения всех пользователей
  async getUsers(req, res, next) {
    try {
      const users = await userService.getAllUsers();
      return res.json(users);
    } catch (error) {
      next(error);
    }
  }

  async sendFriendRequest(req, res, next) {
    try {
      const receiverID = req.params.receiverID;
      const { refreshToken } = req.cookies;

      const userData = await tokenService.validateRefreshToken(refreshToken);

      const message = await userService.sendFriendRequest(
        userData.id,
        receiverID
      );

      res.json({
        sender: userData.id,
        receiverID,
        message,
      });
    } catch (error) {
      next(error);
    }
  }

  async respondToFriendRequest(req, res, next) {
    try {
      const receiverID = req.params.receiverID;
      const { refreshToken } = req.cookies;

      const userData = await tokenService.validateRefreshToken(refreshToken);

      res.json(
        await userService.respondToFriendRequest(userData.id, receiverID, true)
      );
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();
