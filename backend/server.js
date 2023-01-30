const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routesUrls = require("./routes/routes");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://benjiaelo:Incorrect1.@cluster0.46rgtnj.mongodb.net/signup?retryWrites=true&w=majority",
  () => {
    console.log("Database Connected");
  }
);

app.use("/app", routesUrls);

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
