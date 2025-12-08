import express, { json } from "express";
import { routerMovies } from "./movie/routes/movies.js";
import { corsMiddleware } from "./movie/middewares/cors.js";

const app = express();
app.use(json());
app.use(corsMiddleware());

app.use("/movies", routerMovies);

const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () => {
  console.log(`app runing on http://localhost:${PORT}`);
});
