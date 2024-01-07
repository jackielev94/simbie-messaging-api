// import { ThreadDao } from "../dao";
import { MessageWithPersonsDto } from "../dto"

export interface ThreadDto {
  id: string;
  created: string;
}

export interface ThreadWithMessagesDto {
  id: string;
  created: string;
  messages: Array<MessageWithPersonsDto>
}

// export function mapMessageDaoToDto(messageDao: MessageDao): MessageDto {
//   return {
//     id: messageDao.id,
//     content: messageDao.content,
//     threadId: messageDao.thread_id,
//     created: messageDao.created,
//     read: messageDao.read
//   }
// }
