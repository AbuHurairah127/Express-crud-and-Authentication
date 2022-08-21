const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const CONNECTION_URL =
  "mongodb+srv://abuhurairah_127:abuhurairah_127@cluster0.k8i65fj.mongodb.net/?retryWrites=true&w=majority";
const PORT = 5000;
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`server listening on port ${PORT}`))
  )
  .catch((error) => console.error(error.message));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
