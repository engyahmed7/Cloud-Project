const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");
const app = express();

app.use(cors());
app.use(express.json());

// app.use('/customer', proxy('http://localhost:8001'))
// app.use('/shopping', proxy('http://localhost:8003'))
// app.use('/', proxy('http://localhost:8002')) //PRODUCTS

app.use("/api/products", proxy("http://localhost:3001"));

app.listen(3001, () => {
  console.log("GATEWAY is OPEN and LISTING to 3001");
});
