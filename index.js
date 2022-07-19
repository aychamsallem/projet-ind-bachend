import express from "express";
import cors from "cors";
const app = express();
import bodyParser from "body-parser";
/********Connection with Db */
import mongoose from "mongoose";
import ApiRouter from './Router/ApiRouter.js'




const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://aycha:3wacademy@cluster0.bawom.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
connectDB();
/************************** */
app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
// indice pour pointer sur le dossier public pour les fichiers
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "files/views");
app.listen(5000, () => {
  console.log("listning port 5000 ...");

  app.use('/',ApiRouter);

});

