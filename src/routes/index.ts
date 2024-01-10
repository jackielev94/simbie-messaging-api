import { Router } from "express";
import { authenticationRouter } from "./authentication";
import { messagesRouter } from "./messages";
import { personsRouter } from "./persons";

export const rootRouter = Router();

rootRouter.use("/messages", messagesRouter);
rootRouter.use("/persons", personsRouter)
rootRouter.use("/authentication", authenticationRouter)
