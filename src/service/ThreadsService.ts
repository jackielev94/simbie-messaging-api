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
      console.log("messages: ", messages)
      const messagesWithPersons = await this.getMessagesWithPersons(messages);
      console.log("1")
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
      const sender = messagePersons.find(mp => mp.person_role === TypeOfMessagePerson.SENDER);
      const recipient = messagePersons.find(mp => mp.person_role === TypeOfMessagePerson.RECIPIENT);
      return {
        id: message.id,
        content: message.content,
        created: message.created,
        read: message.read,
        threadId: message.thread_id,
        senderId: sender.person_id,
        recipientId: recipient.person_id
      }
    }))
  }
}
