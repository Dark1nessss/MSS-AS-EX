import * as express from "express";
import axios from "axios";

const app = express.default();
app.use(express.json());

// Fetch data from User Service
app.get("/users", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:3001/users");
    res.json(response.data);
  } catch (error) {
    res.status(500).send("Error connecting to User Service");
  }
});

// Fetch data from Product Service
app.get("/products", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:3002/products");
    res.json(response.data);
  } catch (error) {
    res.status(500).send("Error connecting to Product Service");
  }
});

export default app;
