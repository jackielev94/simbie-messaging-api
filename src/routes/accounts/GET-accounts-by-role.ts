import { Router } from "express";
import Joi from "joi";
import { accountsServiceInstance } from "../../dependencyInjection";
import { GetAccountsByRoleRequest, GetAccountsByRoleResponse, TypeOfAccount } from "../../types";
import { validatePayload, wrapAsyncHandler } from "../../util";


export const getAccountsByRole = Router({mergeParams: true}).use(
  validatePayload({
    query: {
      role: Joi.valid(...Object.values(TypeOfAccount)).required(),
    }
  }),
  wrapAsyncHandler(
    async (
      req: GetAccountsByRoleRequest,
      res: GetAccountsByRoleResponse
    ) => {
      try {
        const accounts = await accountsServiceInstance.getAccountsByRole(req.query.role);
        res.status(200).send(accounts);
      } catch(err) {
        res.status(400).send(err.message);
      }
    }
  )
);
