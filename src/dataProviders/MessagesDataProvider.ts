import { simpleQuerySingleResult } from "../db";
import { MessageDao, MessagePersonDao, CreateMessageInput, CreateMessagePersonInput } from "../types";
import { messages_persons_table_name, messages_table_name } from "./constants";

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
      (person_id, message_id, type_of_message_person)
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
}
