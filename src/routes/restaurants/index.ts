import { Router } from "express";
import { getAllReservationsForRestaurant } from "./GET-reservations-for-restaurant"

export const restaurantsRouter = Router();

restaurantsRouter.get("/:id/open-reservations", getAllReservationsForRestaurant)
