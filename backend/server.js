require("dotenv").config();
const express = require("express");
const cors = require("cors");
// require connexion db and run it 
const connectDB = require("./config/db");
const app = express();

connectDB();

// fonct. middleware intégrée dans Express :
// Il analyse les req' entrantes avc des charges utiles JSON et est basé sur un analyseur de corps.
// parse les req http en json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/products",require("./routes/product.js"));
app.use("/api/users",require("./routes/user.js"))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));