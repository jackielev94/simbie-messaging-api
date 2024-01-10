import { Router } from "express";
import { getAccountsByRole } from "./GET-accounts-by-role";

export const accountsRouter = Router();

accountsRouter.get("/", getAccountsByRole);
