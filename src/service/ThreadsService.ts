import { MessageDao, MessageWithPersonsDto, ThreadWithMessagesDto, TypeOfMessagePerson } from "../types";
import { MessagesDataProvider, ThreadsDataProvider } from "../dataProviders";

export class ThreadsService {
  public constructor(
    private readonly threadsDataProvider: ThreadsDataProvider,
    private readonly messagesDataProvider: MessagesDataProvider
  ) {}

  public async getThreadsWithMessagesByPersonId(personId: string): Promise<Array<ThreadWithMessagesDto>> {
    const threads = await this.threadsDataProvider.getThreadsWithMessagesByPersonId(personId);
    return Promise.all(threads.map(async (thread) => {
      const messages = await this.messagesDataProvider.getMessagesByThreadId(thread.id);
      const messagesWithPersons = await this.getMessagesWithPersons(messages);
      return {
        id: thread.id,
        created: thread.created,
        messages: messagesWithPersons
      }
    }))
  }

  public async getMessagesWithPersons(messages: Array<MessageDao>): Promise<Array<MessageWithPersonsDto>> {
    return Promise.all(messages.map(async (message) => {
      const messagePersons = await this.messagesDataProvider.getMessagesPersonsByMessageId(message.id);

      return {
        ...message,
        threadId: message.thread_id,
        senderId: messagePersons.find((messagePerson) => messagePerson.type_of_message_person === TypeOfMessagePerson.SENDER).person_id,
        recipientId: messagePersons.find((messagePerson) => messagePerson.type_of_message_person === TypeOfMessagePerson.RECIPIENT).person_id
      }
    }))
  }
}
