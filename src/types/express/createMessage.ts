import type { Request, Response } from "express";
import { MessageWithPersonsDto } from "../dto";

export type CreateMessageRequestInput = {
  content: string;
  threadId: string;
  senderId: string;
  recipientId: string;
  subject: string | null;
}

export type CreateMessageRequest = Request<
  never,
  never,
  CreateMessageRequestInput
>;

export type CreateMessageResponseBody = MessageWithPersonsDto;

export type CreateMessageResponse = Response<CreateMessageResponseBody>;
