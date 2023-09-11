const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
const port = 8000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

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

app.listen(port, () => {
  console.log("Server running on", port);
});
