const express = require("express");
const mongoose = require("mongoose"); 
const cors = require("cors");
const dotenv = require("dotenv").config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(console.log("connected to mongodb")).catch(err => console.log(err));
const app = express(); 

const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/destination", require("./routes/destinationRoutes"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});