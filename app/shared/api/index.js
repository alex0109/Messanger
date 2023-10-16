/* eslint-disable @typescript-eslint/no-misused-promises */
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");

const errorMiddleware = require("./middlewares/error-middleware");
const router = require("./router");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use("/api", router);
app.use(errorMiddleware);

mongoose
  .connect(
    "mongodb+srv://krossyouyub:buo5O7qdGY7hRjRG@messanger-cluster.iqbd4ps.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected successfully!"))
  .catch((error) => console.log(error));

app.listen(port, "0.0.0.0", () => {
  console.log("Server running on", port);
});

// const createToken = (userId: mongoose.Types.ObjectId) => {
//   const payload = {
//     userId,
//   };

//   const token = jwt.sign(payload, "PBjBpY2xpXx8bx", { expiresIn: "1h" });

//   return token;
// };

//NEED TO INSTALL MULTER
// Configure multer for handling file uploads
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "files/"); // Specify the desired destination folder
//   },
//   filename: function (req, file, cb) {
//     // Generate a unique filename for the uploaded file
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, uniqueSuffix + "-" + file.originalname);
//   },
// });

// app.post("/register", (req, res) => {
//   const { email, password } = req.body;

//   const newUser = new User({ email, password });

//   newUser
//     .save()
//     .then(() => {
//       res.status(200).json({ message: "User registered successfully✅" });
//     })
//     .catch((error) => {
//       console.log("Error⛔️", error);
//       res.status(500).json("Error regestring user");
//     });
// });

// app.post("/login", (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res
//       .status(404)
//       .json({ message: "Email and the password are required!" });
//   }

//   User.findOne({ email })
//     .then((user) => {
//       if (!user) {
//         return res.status(404).json({ message: "User not found" });
//       }

//       if (user.password !== password) {
//         return res.status(404).json({ message: "Invalid password" });
//       }

//       const token = createToken(user._id);
//       setTimeout(() => {
//         res.status(200).json({ token });
//       }, 1000);
//     })
//     .catch((error) => {
//       console.log("error in finding the user", error);
//       res.status(404).json({ message: "Internal server error" });
//     });
// });

// //endpoint to send a request to a user
// app.post("/friend-request", async (req, res) => {
//   const { currentUserId, selectedUserId } = req.body;

//   try {
//     //update the recepient's friendRequestsArray!
//     await User.findByIdAndUpdate(selectedUserId, {
//       $push: { freindRequests: currentUserId },
//     });

//     //update the sender's sentFriendRequests array
//     await User.findByIdAndUpdate(currentUserId, {
//       $push: { sentFriendRequests: selectedUserId },
//     });

//     res.sendStatus(200);
//   } catch (error) {
//     res.sendStatus(500);
//   }
// });

//endpoint to show all the friend-requests of a particular user
// app.get("/friend-request/:userId", async (req, res) => {
//   try {
//     const { userId } = req.params;

//     //fetch the user document based on the User id
//     const user = await User.findById(userId)
//       .populate("freindRequests", "name email image")
//       .lean();

//     const freindRequests = user.freindRequests;

//     res.json(freindRequests);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });

//endpoint to accept a friend-request of a particular person
// app.post("/friend-request/accept", async (req, res) => {
//   try {
//     const { senderId, recepientId } = req.body;

//     //retrieve the documents of sender and the recipient
//     const sender = await User.findById(senderId);
//     const recepient = await User.findById(recepientId);

//     sender.friends.push(recepientId);
//     recepient.friends.push(senderId);

//     recepient.freindRequests = recepient.freindRequests.filter(
//       (request) => request.toString() !== senderId.toString()
//     );

//     sender.sentFriendRequests = sender.sentFriendRequests.filter(
//       (request) => request.toString() !== recepientId.toString
//     );

//     await sender.save();
//     await recepient.save();

//     res.status(200).json({ message: "Friend Request accepted successfully" });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });

//endpoint to access all the friends of the logged in user!
// app.get("/accepted-friends/:userId", async (req, res) => {
//   try {
//     const { userId } = req.params;
//     const user = await User.findById(userId).populate(
//       "friends",
//       "name email image"
//     );
//     const acceptedFriends = user.friends;
//     res.json(acceptedFriends);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// app.post("/messages", async (req, res) => {
//   try {
//     const { senderId, recepientId, messageType, messageText } = req.body;

//     const newMessage = new Message({
//       senderId,
//       recepientId,
//       messageType,
//       message: messageText,
//       timestamp: new Date(),
//     });

//     await newMessage.save();
//     res.status(200).json({ message: "Message sent Successfully" });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// app.get("/user/:userId", async (req, res) => {
//   try {
//     const { userId } = req.params;

//     //fetch the user data from the user ID
//     const recepientId = await UserModel.findById(userId);

//     res.json(recepientId);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

//endpoint to fetch the messages between two users in the chatRoom
// app.get("/messages/:senderId/:recepientId", async (req, res) => {
//   try {
//     const { senderId, recepientId } = req.params;

//     const messages = await Message.find({
//       $or: [
//         { senderId, recepientId },
//         { senderId: recepientId, recepientId: senderId },
//       ],
//     }).populate("senderId", "_id name");

//     res.json(messages);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

//endpoint to delete the messages!
// app.post("/deleteMessages", async (req, res) => {
//   try {
//     const { messages } = req.body;

//     if (!Array.isArray(messages) || messages.length === 0) {
//       return res.status(400).json({ message: "invalid req body!" });
//     }

//     await Message.deleteMany({ _id: { $in: messages } });

//     res.json({ message: "Message deleted successfully" });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Internal Server" });
//   }
// });
