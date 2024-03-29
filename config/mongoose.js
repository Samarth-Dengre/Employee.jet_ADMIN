require("dotenv").config({ path: require("find-config")(".env") });
const mongoose = require("mongoose");
// const dbUrl = "mongodb://0.0.0.0:27017/EmployeeJet";
const dbUrl = process.env.DB_URL;
// console.log(process.env.DB_URL);

mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection established!");
  })
  .catch((err) => {
    console.log(err);
  });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

module.exports = db;
