import { Router } from "express";
import { createMessage } from "./POST-message";
import { updateMessage } from "./PUT-message";

export const messagesRouter = Router();

messagesRouter.post("/", createMessage);
messagesRouter.put("/:id", updateMessage)
