import { Router } from "express";
import { MovieController } from "../controller/movies.js";

export const routerMovies = Router();

routerMovies.get("/", MovieController.getAll);

routerMovies.get("/:id", MovieController.getById);

routerMovies.post("/", MovieController.post);

routerMovies.patch("/:id", MovieController.patch);

routerMovies.delete("/:id", MovieController.delete);
