import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server Running");
});

app.listen(3000);
