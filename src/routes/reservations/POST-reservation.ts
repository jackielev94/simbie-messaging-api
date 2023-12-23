import { Request, Response } from "express"
import { pool } from "../../db/pool"

export const createReservation = async (req: Request, res: Response)=> {
  res.status(200).send("creating reservation")
}
