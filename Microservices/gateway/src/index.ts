import app from "./app";

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Gateway service is running on http://localhost:${PORT}`);
});