import { Router } from "express";
import { makeReservation } from "./PUT-reservation"

export const reservationsRouter = Router();

reservationsRouter.put("/", makeReservation)
