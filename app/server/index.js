//Для парсинга json
const bodyParser = require("body-parser");
//Для парсинга cookie
const cookieParser = require("cookie-parser");
//Для безопасного обмена данными в однос домене
const cors = require("cors");
//Для создания сервера
const express = require("express");
//ODM для mongodb
const mongoose = require("mongoose");
//???
// const passport = require("passport");

const { createServer } = require("http");
const { Server } = require("socket.io");

//Для обработки ошибок
const errorMiddleware = require("./middlewares/error-middleware");
//Роутинг запросов
const router = require("./router");

//Объявляем порт
const port = process.env.API_PORT;

//Создаем сервер
const app = express();

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://10.0.2.2:8081",
  },
});

io.on("connection", (socket) => {
  console.log(`${socket.id} user connected`);

  socket.on("friendRequest", (data) => {
    io.to(data.recipientId).emit("newFriendRequest", {
      message: `У вас новый запрос в друзья ${data.recipientId}!`,
    });
  });
});

//Подключаем парсеры
app.use(bodyParser.json());
app.use(cookieParser());
//Подключаем cors и настраиваем его
app.use(
  cors({
    credentials: true,
    origin: "http://10.0.2.2:8000",
  })
);
//???
// app.use(bodyParser.urlencoded({ extended: false }));
//???
// app.use(passport.initialize());
//Подключаем роуты
app.use("/api", router);
//Подключаем миддлвеир для обработки ошибок
app.use(errorMiddleware);

//Подключаем базу данных(путь лучше спрятать)
mongoose
  .connect("mongodb+srv://krossyouyub:buo5O7qdGY7hRjRG@messanger-cluster.iqbd4ps.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected successfully!"))
  .catch((error) => console.log(error));

//Слушаем определенный порт
app.listen(port, "0.0.0.0", () => {
  console.log("Server running on", port);
});

httpServer.listen(3000, () => {
  console.log("Socket server running on 3000");
});
