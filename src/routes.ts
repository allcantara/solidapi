import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { showUserController } from "./useCases/ShowUser";
import { indexUserController } from "./useCases/IndexUser";
import { updateUserController } from "./useCases/UpdateUser";
import { deleteUserController } from "./useCases/DeleteUser";

const router = Router();

router.post("/users", (request, response) => {
  return createUserController.handle(request, response);
});

router.get("/users/:id", (request, response) => {
  return showUserController.handle(request, response);
});

router.get("/users", (request, response) => {
  return indexUserController.handle(request, response);
});

router.put("/users/:id", (request, response) => {
  return updateUserController.handle(request, response);
});

router.delete("/users/:id", (request, response) => {
  return deleteUserController.handle(request, response);
});

export { router };
