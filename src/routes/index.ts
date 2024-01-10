import { Router } from "express";
import { authenticationRouter } from "./authentication";
import { messagesRouter } from "./messages";
import { personsRouter } from "./persons";
import { threadsRouter } from "./threads";

export const rootRouter = Router();

rootRouter.use("/messages", messagesRouter);
rootRouter.use("/persons", personsRouter)
rootRouter.use("/authentication", authenticationRouter)
rootRouter.use("/threads", threadsRouter)
