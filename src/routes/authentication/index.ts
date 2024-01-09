import { Router } from "express";
import { login } from "./LOGIN";

export const authenticationRouter = Router();

authenticationRouter.get("/login", login);
