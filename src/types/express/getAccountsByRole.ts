import type { Request, Response } from "express";
import { TypeOfAccount } from "../dao";
import { AccountWithPersonDto } from "../dto";

export type GetAccountsByRoleRequestQuery = {
  role: TypeOfAccount;
}

export type GetAccountsByRoleRequest = Request<
  never,
  never,
  never,
  GetAccountsByRoleRequestQuery
>;

export type GetAccountsByRoleResponseBody = Array<AccountWithPersonDto>;

export type GetAccountsByRoleResponse = Response<GetAccountsByRoleResponseBody>;
