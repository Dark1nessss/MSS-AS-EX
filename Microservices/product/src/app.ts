import * as express from "express";

const app = express.default();
app.use(express.json());

app.get("/products", (req, res) => {
  res.json([
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
  ]);
});

export default app;
