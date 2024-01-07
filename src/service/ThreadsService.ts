import { ThreadWithMessagesDto } from "../types";
import { MessagesDataProvider, ThreadsDataProvider } from "../dataProviders";

export class ThreadsService {
  public constructor(
    private readonly threadsDataProvider: ThreadsDataProvider,
    private readonly messagesDataProvider: MessagesDataProvider
  ) {}

  public async getThreadsWithMessagesByPersonId(personId: string): Promise<Array<ThreadWithMessagesDto>> {
    const threads = await this.threadsDataProvider.getThreadsWithMessagesByPersonId(personId);
    return Promise.all(threads.map((thread) => {
      return {
        id: thread.id,
        created: thread.created,
        messages: (mapMessageWithPersonDaoToDto(this.messagesDataProvider.getMessagesByThreadId(thread.id)))
      }
    }))
  }
}
