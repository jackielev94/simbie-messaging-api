import { CreateMessageRequestInput, mapMessageWithPersonDaoToDto, MessageWithPersonsDto, TypeOfMessagePerson, UpdateMessageRequestInput } from "../types";
import { MessagesDataProvider, ThreadsDataProvider } from "../dataProviders";

export class MessagesService {
  public constructor(
    private readonly messagesDataProvider: MessagesDataProvider,
    private readonly threadsDataProvider: ThreadsDataProvider
  ) {}

  public async createMessage(input: CreateMessageRequestInput): Promise<MessageWithPersonsDto> {
    if (!input.threadId) {
      const threadId = await this.createThread(input);
      input.threadId = threadId;
    }
    const message = await this.messagesDataProvider.createMessage(input);
    const sender = await this.messagesDataProvider.createMessagePerson({
      personId: input.senderId,
      messageId: message.id,
      typeOfMessagePerson: TypeOfMessagePerson.SENDER
    });
    const recipient = await this.messagesDataProvider.createMessagePerson({
      personId: input.recipientId,
      messageId: message.id,
      typeOfMessagePerson: TypeOfMessagePerson.RECIPIENT
    });
    return mapMessageWithPersonDaoToDto(message, [sender, recipient]);
  }

  public async createThread(input: CreateMessageRequestInput): Promise<string> {
    const thread = await this.threadsDataProvider.createThread();
    await this.threadsDataProvider.createThreadPerson(thread.id, input.senderId);
    await this.threadsDataProvider.createThreadPerson(thread.id, input.recipientId);
    return thread.id;
  }

  public async updateMessage(input: UpdateMessageRequestInput, messageId: string): Promise<MessageWithPersonsDto> {
    const updatedMessage = await this.messagesDataProvider.updateMessage(input, messageId);
    const messagesPersons = await this.messagesDataProvider.getMessagesPersonsByMessageId(messageId);
    return mapMessageWithPersonDaoToDto(updatedMessage, messagesPersons);
  }

  public async getMessagesWithPersonsByThreadId(threadId: string): Promise<Array<MessageWithPersonsDto>> {
    const messagesToReturn: Array<MessageWithPersonsDto> = [];
    const messages = await this.messagesDataProvider.getMessagesByThreadId(threadId);

    await Promise.all(messages.map(async (message)=> {
      const messagePersons = await this.messagesDataProvider.getMessagesPersonsByMessageId(message.id);
      messagesToReturn.push(mapMessageWithPersonDaoToDto(message, messagePersons))
    }))

    return messagesToReturn
  }
}
