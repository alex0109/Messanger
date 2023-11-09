const socketModel = require("../models/socket");

const encryptionKey = process.env.SOCKET_SECRET;
const algorithm = process.env.ALGORITHM;
const ivLength = Number(process.env.IV_LENGTH);

class SocketService {
  async encryptSocket(socketId) {
    try {
    } catch (error) {
      return null;
    }
  }

  async decryptSocket(socketId) {
    try {
    } catch (error) {
      return null;
    }
  }

  async saveSocket(userId, socketId) {
    const socketData = await socketModel.findOne({ user: userId });
    // const encryptredSocket = this.encryptSocket(socketId);

    if (socketData) {
      socketData.socketId = socketId;
      return socketData.save();
    }

    const socket = await socketModel.create({ user: userId, socketId });

    return socket;
  }
}

//Экспортируем класс
module.exports = new SocketService();
