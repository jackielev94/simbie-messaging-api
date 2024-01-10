import type { Request, Response } from "express";
import { AccountWithPersonDto } from "../dto";

export type LoginSuccess = {
  success: boolean;
  account?: AccountWithPersonDto
}

export type LoginRequestQuery = {
  email: string;
  password: string;
}

export type LoginRequest = Request<
never,
never,
never,
LoginRequestQuery
>;

export type LoginResponseBody = LoginSuccess;

export type LoginResponse = Response<LoginResponseBody>;
