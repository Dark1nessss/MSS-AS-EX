import app from "./app";

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Product service is running on http://localhost:${PORT}`);
});