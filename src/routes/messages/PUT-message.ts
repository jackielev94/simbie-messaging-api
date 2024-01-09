import { Router } from "express";
import Joi from "joi";
import { messagesServiceInstance } from "../../dependencyInjection";
import { UpdateMessageRequest, UpdateMessageResponse } from "../../types/express";
import { validatePayload, wrapAsyncHandler } from "../../util";

export const updateMessage = Router({mergeParams: true}).use(
  validatePayload({
    body: Joi.object({
      read: Joi.boolean().required(),
    }),
    params: Joi.object({
      id: Joi.string().uuid().required()
    })
  }),
  wrapAsyncHandler(
    async (
      req: UpdateMessageRequest,
      res: UpdateMessageResponse
    ) => {
      try {
        const message = await messagesServiceInstance.updateMessage(req.body, req.params.id);
        res.status(200).send(message);
      } catch(err) {
        res.status(400).send(err.message);
      }
    }
  )
);
