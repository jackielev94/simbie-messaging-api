import { Request, Response } from "express"
import { dbClient } from "../../db/pool"

export const createReservation = async (req: Request, res: Response)=> {
  console.log("db client: ", dbClient)
  console.log(await dbClient.query('SELECT NOW()'))
  res.status(200).send("creating reservation")
}
