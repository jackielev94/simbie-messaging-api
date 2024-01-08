import { Router } from "express";
import Joi from "joi";
import { authenticationServiceInstance } from "../../dependencyInjection";
import { LoginRequest, LoginResponse } from "../../types";
import { validatePayload, wrapAsyncHandler } from "../../util";


export const login = Router({mergeParams: true}).use(
  validatePayload({
    query: {
      email: Joi.string().required(),
      password: Joi.string().required()
    }
  }),
  wrapAsyncHandler(
    async (
      req: LoginRequest,
      res: LoginResponse
    ) => {
      try {
        const success = await authenticationServiceInstance.getAccountByEmailAndPassword(req.query);
        if (success) {
          res.status(200).send(success);
        } else {
          res.status(400).send(success)
        }
      } catch(err) {
        res.status(400).send(err.message);
      }
    }
  )
);
