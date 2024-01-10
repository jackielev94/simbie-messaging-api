import { MessageDao, MessagePersonDao, TypeOfMessagePerson } from "../dao";

export interface MessageDto {
  id: string;
  content: string;
  threadId: string;
  created: string;
  read: boolean;
}

export interface MessagePersonDto {
  id: string;
  nameFirst: string;
  nameLast: string;
}

export interface MessageWithPersonsDto {
  id: string;
  content: string;
  threadId: string;
  created: string;
  read: boolean;
  sender: MessagePersonDto;
  recipient: MessagePersonDto;
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

export interface UpdateMessageInput {
  read: boolean;
}

export function mapMessageWithPersonDaoToDto(messageDao: MessageDao, messagePersonsDao: Array<MessagePersonDao>): MessageWithPersonsDto {
  const sender = messagePersonsDao.find(mp => mp.person_role === TypeOfMessagePerson.SENDER);
  const recipient =  messagePersonsDao.find(mp => mp.person_role === TypeOfMessagePerson.RECIPIENT);
  return {
    id: messageDao.id,
    content: messageDao.content,
    threadId: messageDao.thread_id,
    created: messageDao.created,
    read: messageDao.read,
    sender: {
      id: sender.person_id,
      nameFirst: sender.name_first,
      nameLast: sender.name_last
    },
    recipient: {
      id: recipient.person_id,
      nameFirst: recipient.name_first,
      nameLast: recipient.name_last
    }
  }
}
