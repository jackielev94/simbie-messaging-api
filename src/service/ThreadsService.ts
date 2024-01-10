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
      const sender = messagePersons.find(mp => mp.person_role === TypeOfMessagePerson.SENDER);
      const recipient = messagePersons.find(mp => mp.person_role === TypeOfMessagePerson.RECIPIENT);
      return {
        id: message.id,
        content: message.content,
        created: message.created,
        read: message.read,
        threadId: message.thread_id,
        sender: {
          id: sender.person_id,
          nameFirst: sender.name_first,
          nameLast: sender.name_last,
        },
        recipient: {
          id: recipient.person_id,
          nameFirst: recipient.name_first,
          nameLast: recipient.name_last,
        }
      }
    }))
  }
}
