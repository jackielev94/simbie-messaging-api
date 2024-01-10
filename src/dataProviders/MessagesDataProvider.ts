import { simpleQuery, simpleQuerySingleResult } from "../db";
import { MessageDao, MessagePersonDao, CreateMessageInput, CreateMessagePersonInput, UpdateMessageInput } from "../types";
import { messages_persons_table_name, messages_table_name, persons_table_name } from "./constants";

export class MessagesDataProvider {
  public async createMessage(input: CreateMessageInput): Promise<MessageDao> {
    const query = `
      insert into ${messages_table_name}
      (content, thread_id)
      values ($1, $2) returning *
    `;
    return simpleQuerySingleResult(query,
      [
        input.content,
        input.threadId,
      ]
    );
  }

  public async createMessagePerson(input: CreateMessagePersonInput): Promise<MessagePersonDao> {
    const query = `
      insert into ${messages_persons_table_name}
      (person_id, message_id, person_role)
      values ($1, $2, $3) returning *
    `;
    return simpleQuerySingleResult(query,
      [
        input.personId,
        input.messageId,
        input.typeOfMessagePerson
      ]
    );
  }

  public async getMessagesByThreadId(threadId: string): Promise<Array<MessageDao>> {
    const query = `
      select * from ${messages_table_name}
      where thread_id = $1
      order by created desc
    `;
    return simpleQuery(query, [ threadId ]);
  }

  public async getMessagesPersonsByMessageId(messageId: string): Promise<Array<MessagePersonDao>> {
    const query = `
      select mp.person_role,
      mp.message_id as message_id,
      p.name_first as name_first,
      p.name_last as name_last,
      p.id as person_id
      from ${messages_persons_table_name} mp
      join ${persons_table_name} p
      on mp.person_id = p.id
      where message_id = $1
    `;
    return simpleQuery(query, [ messageId ]);
  }

  public async updateMessage(input: UpdateMessageInput, messageId: string): Promise<MessageDao> {
    const query = `
      update ${messages_table_name}
      set read = $1
      where id = $2
      returning *
    `;
    return simpleQuerySingleResult(query, [ input.read, messageId ]);
  }
}
