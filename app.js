const express = require("express");

const PORT = 3000;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Olá, mundo!" });
});

app.listen(PORT, () => {
  console.log("APP RODANDO NA PORTA " + PORT);
});

module.exports = app;
