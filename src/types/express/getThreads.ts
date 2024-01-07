import type { Request, Response } from "express";
import { ThreadWithMessagesDto } from "../dto";

export type GetThreadsWithMessagesRequestParams = {
  id: string;
}

export type GetThreadsWithMessagesRequest = Request<
GetThreadsWithMessagesRequestParams
>;

export type GetThreadsWithMessagesResponseBody = Array<ThreadWithMessagesDto>;

export type GetThreadsWithMessagesResponse = Response<GetThreadsWithMessagesResponseBody>;
