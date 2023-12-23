import { pool } from "./pool";

export async function simpleQuery(
  queryString: string,
  parameters: Array<
    string | number | boolean | undefined | null | Array<string>
  > = []
) {
  const client = await pool.connect();

  try {
    await client.query("begin");
    const response = await client.query(queryString, parameters);

    await client.query("commit");

    return response.rows;
  } catch (e: unknown) {
    await client.query("rollback");
    throw e;
  } finally {
    client.release();
  }
}
