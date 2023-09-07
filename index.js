/* Express kutubxonani yuklash */
const express = require("express");
const { default: mongoose } = require("mongoose");
const { config } = require("dotenv");
config();

const app = express();
app.set("view engine", "ejs");

/* Connect MngoDB */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected!");
  })
  .catch((error) => {
    console.error(error.message);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/users", require("./routes/users"));

/* Connect PORT */
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Running on ${port} port...`);
});
