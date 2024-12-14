import * as express from "express";

const app = express.default(); 
app.use(express.json());

app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Dmytro" },
    { id: 2, name: "Ana" },
  ]);
});

export default app;