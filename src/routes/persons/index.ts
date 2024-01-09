import { Router } from "express";
import { getThreadsWithMessages } from "./GET-person-threads";

export const personsRouter = Router();

personsRouter.get("/:id/threads", getThreadsWithMessages);
