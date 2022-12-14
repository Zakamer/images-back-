import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import rute from "./routes/rute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(rute);

const port = 3000

app.listen(3000, ()=> console.log(`Server Up and Running ${port}`));