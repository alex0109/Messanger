//Создаем и экспортируем класс для обработки ошибок, который наследуется от класса Error
module.exports = class ApiError extends Error {
  status;
  errors;

  constructor(status, message, errors) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  //Ошибка для неауторизованных пользователей
  static UnauthorizedError() {
    return new ApiError(401, "User not authorized");
  }

  //Ошибка для некорректных запросов
  static BadRequest(message, errors = []) {
    return new ApiError(400, message, errors);
  }
};
