const jwt = require("jsonwebtoken");
require("dotenv").config();

const tokenModel = require("../models/token");

class TokenService {
  generateTokens(payload) {
    const accessToken = jwt.sign(
      payload,
      process.env.EXPO_PUBLIC_JWT_ACCESS_SECRET,
      { expiresIn: "1h" }
    );

    const refreshToken = jwt.sign(
      payload,
      process.env.EXPO_PUBLIC_JWT_REFRESH_SECRET,
      { expiresIn: "60d" }
    );

    return { accessToken, refreshToken };
  }

  async saveToken(userId, refreshToken) {
    const tokenData = await tokenModel.findOne({ user: userId });

    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }

    const token = await tokenModel.create({ user: userId, refreshToken });

    return token;
  }
}

module.exports = new TokenService();
