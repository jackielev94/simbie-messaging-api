import { Router } from "express";
import { createReservation } from "./POST-reservation"

export const reservationsRouter = Router();

reservationsRouter.post("/", createReservation)
