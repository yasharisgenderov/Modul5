const express = require("express");
const app = express();

const goods = [
  { id: 1, title: "Mouse", price: "14$", quantity: 100 },
  { id: 2, title: "Keyboard", price: "25$", quantity: 100 },
  { id: 3, title: "Case", price: "100$", quantity: 100 },
  { id: 4, title: "Monitor", price: "250$", quantity: 100 },
  { id: 5, title: "Speaker", price: "35$", quantity: 100 },
  { id: 6, title: "Processor", price: "1000$", quantity: 100 },
  { id: 7, title: "Motherboard", price: "1500$", quantity: 100 },
  { id: 8, title: "Hard Disk", price: "500$", quantity: 100 },
  { id: 9, title: "Power Supply", price: "300$", quantity: 100 },
  { id: 10, title: "Printer", price: "100$", quantity: 100 },
];
app.get("/user", function (req, res) {
  const count = parseInt(req.query.count);
  const offset = parseInt(req.query.offset);
  res.send({ goods: goods.slice(offset, offset + count), count: goods.length });
});
app.get("/user/:id", function (req, res) {
  const idOfgoods = parseInt(req.params.id);
  const good = goods.find((user) => user.id === idOfgoods);
  if (!good) {
    res.status(404).send("Id is not defined");
  } else {
    res.status(200).send(good);
  }
});
app.listen(3005);
