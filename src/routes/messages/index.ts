import { Router } from "express";
import { createMessage } from "./POST-message";

export const messagesRouter = Router();

messagesRouter.post("/", createMessage);
