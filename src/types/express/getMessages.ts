import type { Request, Response } from "express";
import { MessageWithPersonsDto } from "../dto";

export type GetMessagesByThreadIdRequestParams = {
  id: string;
}

export type GetMessagesByThreadIdRequest = Request<
GetMessagesByThreadIdRequestParams
>;

export type GetMessagesByThreadIdResponseBody = Array<MessageWithPersonsDto>;

export type GetMessagesByThreadIdResponse = Response<GetMessagesByThreadIdResponseBody>;
