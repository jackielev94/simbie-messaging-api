import { Router } from "express";
import Joi from "joi";
import { messagesServiceInstance } from "../../dependencyInjection";
import { GetMessagesByThreadIdRequest, GetMessagesByThreadIdResponse } from "../../types";
import { validatePayload, wrapAsyncHandler } from "../../util";


export const getMessagesByThreadId = Router({mergeParams: true}).use(
  validatePayload({
    params: {
      id: Joi.string().uuid().required()
    }
  }),
  wrapAsyncHandler(
    async (
      req: GetMessagesByThreadIdRequest,
      res: GetMessagesByThreadIdResponse
    ) => {
      try {
        const messages = await messagesServiceInstance.getMessagesWithPersonsByThreadId(req.params.id);
        res.status(200).send(messages);
      } catch(err) {
        res.status(400).send(err.message);
      }
    }
  )
);
