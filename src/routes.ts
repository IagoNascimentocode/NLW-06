import { Router } from "express";
import { CreateUserController } from "./controller/CreateUserController";
import { CreateTagController } from "./controller/CreateTagController";

const router = Router();

const createTagController = new CreateTagController();
const createUserController = new CreateUserController();

router.post("/users", createUserController.handle);
router.post("/tags", createTagController.handle);

export { router }