import { pool } from "./pool";

export async function simpleQuerySingleResult(
  queryString: string,
  parameters: Array<
    string | null | undefined | number | boolean | Array<string>
  >
) {
  const client = await pool.connect();

  try {
    const response = await client.query(queryString, parameters);
    await client.query("commit");
    return response.rows[0];
  } catch (e: unknown) {
    await client.query("rollback");
    throw e;
  } finally {
    client.release();
  }
}
