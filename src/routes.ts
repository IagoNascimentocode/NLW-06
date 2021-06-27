import { Router } from "express";
import { CreateUserController } from "./controller/CreateUserController";
import { CreateTagController } from "./controller/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUSerController } from "./controller/AuthenticateUserController";
import { CreateComplimentController } from "./controller/CreateComplimentController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router();

const createTagController = new CreateTagController();
const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUSerController();
const createComplimentController = new CreateComplimentController();

router.post("/users", createUserController.handle);
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", ensureAuthenticated, createComplimentController.handle)

export { router }