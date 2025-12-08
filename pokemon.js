import express, { json } from "express";
import ditto from "./pokemon/ditto.json";

const app = express();

const PORT = 1234;

app.use(json());

/*  app.use((req, res, next) => {
  if (req.method !== "POST") return next();

  let body = "";

  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", () => {
    const data = JSON.parse(body);

    data.timestamp = Date.now();
    req.body = data;
    next();
  });
}); */

app.get("/pokemon/ditto", (req, res) => {
  res.send(ditto);
});

app.post("/pokemon", (req, res) => {
  res.status(201).json(req.body);
});

app.use((req, res) => {
  res.status(404).send(`<h1>Page not found`);
});

app.listen(PORT, () => {
  console.log(`app runing on http//localhost:${PORT}`);
});
