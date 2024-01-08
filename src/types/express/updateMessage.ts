import type { Request, Response } from "express";
import { MessageDto } from "../dto";

export type UpdateMessageRequestInput = {
  read: boolean;
}

export type UpdateMessageRequestParams = {
  id: string;
}

export type UpdateMessageRequest = Request<
  UpdateMessageRequestParams,
  never,
  UpdateMessageRequestInput
>;

export type UpdateMessageResponseBody = MessageDto;

export type UpdateMessageResponse = Response<UpdateMessageResponseBody>;
