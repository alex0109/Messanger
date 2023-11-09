//Создаем и экспортируем класс для взятия только безопасных данных пользователя
module.exports = class UserDto {
  email;
  id;
  outgoingRequests;
  incomingRequests;
  contacts;
  registeredAt;

  constructor(model) {
    this.id = model._id;
    this.email = model.email;
    this.outgoingRequests = model.outgoingRequests;
    this.incomingRequests = model.incomingRequests;
    this.contacts = model.contacts;
    this.registeredAt = model.registeredAt;
  }
};
