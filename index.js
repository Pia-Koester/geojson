const express = require("express");
const app = express();
const port = 8000;

//DATABASE
const db = require("./db");

// MIDDLEWARE
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//ROUTES
const userRouter = require("./routes/users");
app.use("/users", userRouter);
const propertyRouter = require("./routes/properties");
app.use("/properties", propertyRouter);

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
