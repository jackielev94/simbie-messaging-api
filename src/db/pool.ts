import { Pool } from "pg";
import { PG_CONN } from "../constants";

export const pool = new Pool({
  connectionString: PG_CONN,
});
