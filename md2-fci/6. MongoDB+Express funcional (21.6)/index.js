const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ELEMENTOS PARA CONECTAR CON MONGODB
// SIEMPRE IGUALES. DOS FORMAS.
// MONGOOSE Y MONGO CLIENT. EMPEZAMOS CON MC POR ESTABILIDAD.

const mongodb = require("mongodb");
let MongoClient = mongodb.MongoClient;

// CONEXIÓN CON MONGODB VÍA MONGO CLIENT

MongoClient.connect("mongodb://0.0.0.0:27017/", function (err, client) {
  if (err != null) {
    console.log(err);
    console.log("No se ha podido conectar con MongoDB");
  } else {
    app.locals.db = client.db("CienciaFiccion");
    console.log(
      "Conexión correcta a la base de datos CienciaFicción de MongoDB"
    );
  }
});

// AQUÍ LAS RUTAS
app.get("/planetas", function (req, res) {
  app.locals.db
    .collection("Planetas")
    .find()
    .toArray(function (err, datos) {
      if (err != null) {
        console.log(err);
      } else {
        console.log(datos);
        res.send(datos);
      }
    });
});

app.post("/planetas", (req, res) => {
  let nuevo = {
    nombre: req.body.nombre,
    lore: req.body.lore,
    sistema: req.body.sistema,
    vida: req.body.vida,
    img: req.body.img,
  };

  // AQUÍ GUARDAREMOS ESTE ELEMENTO A LA BASE DE DATOS
  // NO NECESITAMOS HACER UN PUSH PORQUE NO ES UN ARRAY
  //           db.planetas.insertOne({})
  app.locals.db.collection("Planetas").insertOne(nuevo, function (err, res) {
    if (err != null) {
      console.log(err);
    } else {
      console.log("Añadido correctamente a la colección Planetas");
    }
  });
});

app.put("/planetas", (req, res) => {
  let nuevo = {
    nombre: req.body.nombre,
    lore: req.body.lore,
    sistema: req.body.sistema,
    vida: req.body.vida,
    img: req.body.img,
  };

  // AHORA TENDRÉ QUE MIRAR EN LA BASE DE DATOS
  // SI HAY COINCIDENCIA Y, EN CASO DE QUE
  // LA HAYA, MODIFICAR EL RESTO DE VALORES

  app.locals.db.collection("Planetas").updateOne(
    { nombre: nuevo.nombre },
    {
      $set: {
        lore: nuevo.lore,
        sistema: nuevo.sistema,
        vida: nuevo.vida,
        img: nuevo.img,
      },
    },
    function (err, res) {
      if (err != null) {
        console.log(err);
      } else {
        console.log("Planeta modificado correctamente");
      }
    }
  );
});

app.delete("/planetas", (req, res) => {
  app.locals.db
    .collection("Planetas")
    .deleteMany({ nombre: req.body.nombre }, function (err, res) {
      if (err != null) {
        console.log(err);
      } else {
        console.log("Planeta eliminado correctamente");
      }
    });
});

// Y EL PUERTO

app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor (Express JS) conectado correctamente al puerto 3000");
});
