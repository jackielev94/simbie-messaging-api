import { Request, Response } from "express"

export const createReservation = (req: Request, res: Response)=> {
  res.status(200).send("creating reservation")
}
