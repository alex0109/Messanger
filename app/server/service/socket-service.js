const CryptoJS = require("crypto-js");

const socketModel = require("../models/socket");
const encryptionKey = process.env.SOCKET_SECRET;
const ivLength = Number(process.env.IV_LENGTH);

class SocketService {
  async encryptSocket(socketId) {
    try {
      const iv = CryptoJS.lib.WordArray.random(ivLength);
      const encryptedSocket = CryptoJS.AES.encrypt(socketId, encryptionKey, {
        iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      }).toString();
      return { iv: iv.toString(CryptoJS.enc.Hex), encryptedSocket };
    } catch (error) {
      console.error("Error encrypting socket:", error);
      return null;
    }
  }

  async decryptSocket(encryptedSocket, iv) {
    try {
      const decryptedSocket = CryptoJS.AES.decrypt(encryptedSocket, encryptionKey, {
        iv: CryptoJS.enc.Hex.parse(iv),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      }).toString(CryptoJS.enc.Utf8);
      return decryptedSocket;
    } catch (error) {
      console.log("Error decrypting socket:", error);
      return null;
    }
  }

  async saveSocket(userId, socketId) {
    try {
      const socketData = await socketModel.findOne({ user: userId });

      const { iv, encryptedSocket } = await this.encryptSocket(socketId);
      if (socketData) {
        socketData.socketId = encryptedSocket;
        socketData.iv = iv;
        return socketData.save();
      }

      const socket = await socketModel.create({ user: userId, socketId: encryptedSocket, iv });

      return socket;
    } catch (error) {
      console.error("Error saving socket:", error);
      return null;
    }
  }
}

//Экспортируем класс
module.exports = new SocketService();
