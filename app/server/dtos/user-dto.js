//Создаем и экспортируем класс для взятия только безопасных данных пользователя
module.exports = class UserDto {
  email;
  id;
  socketId;
  outgoingRequests;
  incomingRequests;
  contacts;
  photo;
  bio;
  registeredAt;

  constructor(model) {
    this.id = model._id;
    this.email = model.email;
    this.socketId = model.socketId;
    this.outgoingRequests = model.outgoingRequests;
    this.incomingRequests = model.incomingRequests;
    this.contacts = model.contacts;
    this.photo = model.photo;
    this.bio = model.bio;
    this.registeredAt = model.registeredAt;
  }
};
