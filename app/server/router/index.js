//Берем роутер из express
const Router = require("express").Router;

//Библиотека для валидации тела запроса
const { body } = require("express-validator");

//Берем методы пользователя
const userController = require("../controllers/user-controller");
//Берем мидлвеир ауторизации
const authMiddleware = require("../middlewares/auth-middleware");

//Создаем роутер
const router = new Router();

//Указываем путь потом валидации или мидлвеиры, а потом колбэк с тем что нужно делать, если был вызван этот путь
router.post(
  "/registration",
  body("email").isEmail(),
  body("password").isLength({ min: 6, max: 32 }),
  userController.registration
);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/refresh", userController.refresh);
router.get("/users", authMiddleware, userController.getUsers);
router.get("/users/:userID", authMiddleware, userController.getOneUser);
router.patch("/users/:userID", userController.updateUser);
router.post("/friend-request/:receiverID", authMiddleware, userController.sendFriendRequest);
router.put(
  "/friend-request/:receiverID/accept",
  authMiddleware,
  userController.acceptFriendRequest
);
router.delete(
  "/friend-request/:receiverID/reject",
  authMiddleware,
  userController.rejectFriendRequest
);

module.exports = router;
