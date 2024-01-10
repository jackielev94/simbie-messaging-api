import { simpleQuery, simpleQuerySingleResult } from "../db";
import { ThreadDao, ThreadPersonDao } from "../types";
import { threads_table_name, threads_persons_table_name } from "./constants";

export class ThreadsDataProvider {
  public async createThread(subject: string): Promise<ThreadDao> {
    const query = `
      insert into ${threads_table_name}
      (subject)
      values ($1)
      returning *
    `;
    return simpleQuerySingleResult(query, [ subject ?? "Empty Subject",
  ]);
  }

  public async createThreadPerson(threadId: string, personId: string): Promise<ThreadPersonDao> {
    const query = `
      insert into ${threads_persons_table_name}
      (person_id, thread_id)
      values ($1, $2) returning *
    `;
    return simpleQuerySingleResult(query,
      [
        personId,
        threadId
      ]
    );
  }

  public async getThreadsWithMessagesByPersonId(personId: string): Promise<Array<ThreadDao>> {
    const query = `
      select t.* from ${threads_table_name} t
      join ${threads_persons_table_name} tp
      on t.id = tp.thread_id
      where tp.person_id = $1
      order by created desc
    `;
    return simpleQuery(query, [personId])
  }
}
