const express = require("express");

const PORT = 3000;

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  return res.json({ message: "Olá, mundo!" });
});

const server = app.listen(PORT, () => {
  console.log("APP RODANDO NA PORTA " + PORT);
});


const closeServer = () => {
  server.close();
};

module.exports = {app, closeServer};
