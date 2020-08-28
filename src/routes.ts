import { Router, request } from "express";
import { whatsapp } from "./client";
import { createUserController } from "./useCases/CreateUser";
import { showUserController } from "./useCases/ShowUser";
import { indexUserController } from "./useCases/IndexUser";

const router = Router();

router.post("/users", (request, response) => {
  return createUserController.handle(request, response, whatsapp);
});

router.get("/users/:id", (request, response) => {
  return showUserController.handle(request, response);
});

router.get("/users", (request, response) => {
  return indexUserController.handle(request, response);
});

export { router };
