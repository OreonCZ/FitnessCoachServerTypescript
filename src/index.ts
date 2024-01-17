import express from "express";
import dotenv, { config } from "dotenv";
dotenv.config(); //načte .env soubor do process.env
//process
import cors = require("cors"); //na stary balicky import
const app = express();
app.use(express.json()); //app bude pouzivat jen json
app.use(cors()); //app bude pouzivat cors

const PORT = process.env.PORT || 3000;

app.use(`/api/v${process.env.API_VER}/user`, require("./routes/user"));

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
})