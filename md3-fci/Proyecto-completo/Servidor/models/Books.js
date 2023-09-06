const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  titulo: String,
  autor: String,
  editorial: String,
});

const UserModel = mongoose.model("books", UserSchema);

module.exports = UserModel;
