const ApiError = require("../exceptions/api-error");
const tokenService = require("../service/token-service");

//Экспортируем функцию для проверки токена
module.exports = function (req, res, next) {
  try {
    //Берем токен из хедера запроса
    const authorizationHeader = req.headers.authorization;
    //Проверяем есть ли он вообще
    if (!authorizationHeader) {
      return next(ApiError.UnauthorizedError());
    }

    //Берем токен, потому что первое это слово Bearer
    const accessToken = authorizationHeader.split(" ")[1];
    //Проверка
    if (!accessToken) {
      return next(ApiError.UnauthorizedError());
    }

    //Берем данные о пользователе
    const userData = tokenService.validateAccessToken(accessToken);
    //Проверка
    if (!userData) {
      return next(ApiError.UnauthorizedError());
    }

    //Ложим в запрос в user полученные данные из токена
    req.user = userData;
    //Идем дальше
    next();
  } catch (error) {
    return next(ApiError.UnauthorizedError());
  }
};
