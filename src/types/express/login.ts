import type { Request, Response } from "express";

export type LoginSuccess = {
  success: boolean;
}

export type LoginRequestParams = {
  username: string;
  password: string;
}

export type LoginRequest = Request<
LoginRequestParams
>;

export type LoginResponseBody = LoginSuccess;

export type LoginResponse = Response<LoginResponseBody>;
