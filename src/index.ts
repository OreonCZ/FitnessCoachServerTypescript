import express from "express";
import dotenv, { config } from "dotenv";
dotenv.config(); //načte .env soubor do process.env
//process
import cors = require("cors"); //na stary balicky import
import db from "./models/index";

const app = express();
app.use(express.json()); //app bude pouzivat jen json
app.use(cors()); //app bude pouzivat cors

const PORT = process.env.PORT || 3000;

db.sequelize.sync({ force: true, alter: true }).then(async() => {
  const userRolesData = [
  {
    name: "user",
  },
  {
    name: "admin",
  },
];
  await db.accountRoles.bulkCreate(userRolesData);
});

app.use(`/api/v${process.env.API_VER}/user`, require("./routes/user"));
app.use(`/api/v${process.env.API_VER}/food`, require("./routes/food"));
app.use(`/api/v${process.env.API_VER}/exercises`, require("./routes/exercises"));
app.use(`/api/v${process.env.API_VER}/friends`, require("./routes/friends"));
app.use(`/api/v${process.env.API_VER}/table`, require("./routes/table"));
app.use(`/api/v${process.env.API_VER}/programs`, require("./routes/programs"));
app.use(`/api/v${process.env.API_VER}/achievements`, require("./routes/achievements"));
app.use(`/api/v${process.env.API_VER}/meals`, require("./routes/meals"));
app.use(`/api/v${process.env.API_VER}/exercisecategory`, require("./routes/exercisecategory"));

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
