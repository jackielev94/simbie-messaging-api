import dotenv from "dotenv";

dotenv.config();

export const { PG_CONN } = process.env;
export const port = 3000;
