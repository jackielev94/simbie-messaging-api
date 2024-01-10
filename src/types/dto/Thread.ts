import { MessageWithPersonsDto } from "../dto"

export interface ThreadDto {
  id: string;
  created: string;
  subject: string;
}

export interface ThreadWithMessagesDto {
  id: string;
  created: string;
  subject: string;
  messages: Array<MessageWithPersonsDto>
}
