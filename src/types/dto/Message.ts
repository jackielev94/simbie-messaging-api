import { MessageDao, TypeOfMessagePerson } from "../dao";

export interface MessageDto {
  id: string;
  content: string;
  threadId: string;
  created: string;
  read: boolean;
}

export interface MessageWithPersonsDto {
  id: string;
  content: string;
  threadId: string;
  created: string;
  read: boolean;
  senderId: string;
  recipientId: string;
}

export interface CreateMessageInput {
  content: string;
  threadId: string;
}

export interface CreateMessagePersonInput {
  personId: string;
  messageId: string;
  typeOfMessagePerson: TypeOfMessagePerson
}

export function mapMessageDaoToDto(messageDao: MessageDao): MessageDto {
  return {
    id: messageDao.id,
    content: messageDao.content,
    threadId: messageDao.thread_id,
    created: messageDao.created,
    read: messageDao.read
  }
}
