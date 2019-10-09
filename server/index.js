const express = require("express");
const app = express();
const accountRoutes = require("./routes/accounts.js");
const categoryRoutes = require("./routes/categories.js");
const transactionRoutes = require("./routes/transactions.js");
const morgan = require("morgan");
const bodyParser = require("body-parser")

app.use(bodyParser.json());
app.use(morgan("tiny"));

app.use(express.static("dist"));
app.use("/api/transactions", transactionRoutes);
app.use("/api/accounts", accountRoutes);
app.use("/api/categories", categoryRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("now listening on port ", port);
});
