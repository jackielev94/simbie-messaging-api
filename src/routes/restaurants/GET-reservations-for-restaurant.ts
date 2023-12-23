import {Request, Response} from "express"

export const getAllReservationsForRestaurant = (req: Request, res: Response) => {
  console.log("id: ", req.params.id)
  res.status(200).send("getting reservations all reservations for restaurant")
}
