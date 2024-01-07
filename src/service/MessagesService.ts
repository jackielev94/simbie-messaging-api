import { CreateMessageRequestInput, mapMessageDaoToDto, MessageDto, TypeOfMessagePerson } from "../types";
import { MessagesDataProvider, ThreadsDataProvider } from "../dataProviders";

export class MessagesService {
  public constructor(
    private readonly messagesDataProvider: MessagesDataProvider,
    private readonly threadsDataProvider: ThreadsDataProvider
  ) {}

  public async createMessage(input: CreateMessageRequestInput): Promise<MessageDto> {
    if (!input.threadId) {
      const threadId = await this.createThread(input);
      input.threadId = threadId;
    }
    const message = await this.messagesDataProvider.createMessage(input);
    await this.messagesDataProvider.createMessagePerson({
      personId: input.senderId,
      messageId: message.id,
      typeOfMessagePerson: TypeOfMessagePerson.SENDER
    });
    await this.messagesDataProvider.createMessagePerson({
      personId: input.recipientId,
      messageId: message.id,
      typeOfMessagePerson: TypeOfMessagePerson.RECIPIENT
    });
    return mapMessageDaoToDto(message);
  }

  public async createThread(input: CreateMessageRequestInput): Promise<string> {
    const thread = await this.threadsDataProvider.createThread();
    await this.threadsDataProvider.createThreadPerson(thread.id, input.senderId);
    await this.threadsDataProvider.createThreadPerson(thread.id, input.recipientId);
    return thread.id;
  }
}
