import { Router } from "express";
import { getMessagesByThreadId } from "./GET-messages-by-thread-id";

export const threadsRouter = Router();

threadsRouter.get("/:id/messages", getMessagesByThreadId);
