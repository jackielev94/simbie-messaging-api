import { Pool } from "pg";
import { PG_CONN } from "../constants";

const pool = new Pool({
  connectionString: PG_CONN,
});

export const dbClient = pool.connect();
