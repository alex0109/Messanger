//Библиотека для использования jwt
const jwt = require("jsonwebtoken");
//Библиотека для использования файлов .env
require("dotenv").config();

//Берем модель бд токена
const tokenModel = require("../models/token");

//Создаем класс с методами работы с токенами
class TokenService {
  //Метод создания токена
  generateTokens(payload) {
    //Создаем токен доступа
    const accessToken = jwt.sign(
      //Передаем данные которые хотим в него положить
      payload,
      //Используем секретный ключ для создания токена
      process.env.JWT_ACCESS_SECRET,
      //Устанавливаем время жизни
      { expiresIn: "1h" }
    );

    //Создаем токен для обновления
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: "60d" });

    //Возвращаем новые токены
    return { accessToken, refreshToken };
  }

  //Метод для проверки принадлежит ли токен пользователю и не является ли он подделкой с помощью секретного ключа
  validateAccessToken(token) {
    try {
      //Проверка
      const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);

      //Если все хорошо возвращаем пользователя
      return userData;
    } catch (error) {
      return null;
    }
  }

  //Метод для проверки токена обновления
  validateRefreshToken(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);

      return userData;
    } catch (error) {
      return null;
    }
  }

  //Метод для сохранения токена обновления и id пользователя
  async saveToken(userId, refreshToken) {
    const tokenData = await tokenModel.findOne({ user: userId });

    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }

    const token = await tokenModel.create({ user: userId, refreshToken });

    return token;
  }

  //Метод удаления токена обновления в бд
  async removeToken(refreshToken) {
    const tokenData = await tokenModel.deleteOne({ refreshToken });
    return tokenData;
  }

  //Метод для поиска токена в бд
  async findToken(refreshToken) {
    const tokenData = await tokenModel.findOne({ refreshToken });
    return tokenData;
  }
}

//Экспортируем класс
module.exports = new TokenService();
