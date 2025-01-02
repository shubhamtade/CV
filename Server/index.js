import express, { json } from "express";

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port || 4000}`);
});
