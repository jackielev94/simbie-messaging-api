import type { Request, Response } from "express";
import { MessageDto } from "../dto";

export type CreateMessageRequestInput = {
  content: string;
  threadId: string;
  senderId: string;
  recipientId: string;
}

export type CreateMessageRequest = Request<
  never,
  never,
  CreateMessageRequestInput
>;

export type CreateMessageResponseBody = MessageDto;

export type CreateMessageResponse = Response<CreateMessageResponseBody>;
