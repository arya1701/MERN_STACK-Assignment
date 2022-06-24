const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandlor } = require("./middlewares/errorMiddlewares");

const app = express();
dotenv.config(); // now we are ready to use dotenv file
connectDB();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World, Good world!");
});

app.use("/api/users", userRoutes);
app.use(notFound);
app.use(errorHandlor);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
