const express = require("express");
const connectDB = require("./config/connectDB");
const user = require("./routes/user");
const projet = require("./routes/projet");
const app = express();
connectDB();

app.use(express.json());

app.use("/user", user);
app.use("/projet",projet);
const PORT = process.env.PORT || 8081;

app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`serveur run on Port ${PORT}`)
);
