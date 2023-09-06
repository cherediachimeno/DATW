const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/Books");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/crud");

app.get("/", (req, res) => {
  UserModel.find({})
    .then((books) => res.json(books))
    .catch((err) => res.json(err));
});

app.post("/createBooks", (req, res) => {
  UserModel.create(req.body)
    .then((books) => res.json(books))
    .catch((err) => res.json(err));
});

app.delete("/deleteBooks/:id", (req, res) => {
  const codigo = req.params.id;
  UserModel.findByIdAndDelete({ titulo: "Sociedad Kaiju" })
    .then((res) => res.json())
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("Conectado correctamente");
});
