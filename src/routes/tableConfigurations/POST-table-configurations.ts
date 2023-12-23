import {Request, Response} from "express"

export const createTableConfiguration = (req: Request, res: Response)=> {
  res.status(200).send("creating table configutations")
}
