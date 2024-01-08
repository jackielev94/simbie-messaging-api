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
