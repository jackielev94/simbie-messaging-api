import { Router } from "express";
import Joi from "joi";
import { messagesServiceInstance } from "../../dependencyInjection";
import { CreateMessageRequest, CreateMessageResponse } from "../../types/express";
import { validatePayload, wrapAsyncHandler } from "../../util";

export const createMessage = Router().use(
  validatePayload({
    body: Joi.object({
      content: Joi.string().required(),
      threadId: Joi.string().uuid().allow(null),
      senderId: Joi.string().uuid().required(),
      subject: Joi.string().allow(null),
      recipientId: Joi.string().uuid().required()
    })
  }),
  wrapAsyncHandler(
    async (
      req: CreateMessageRequest,
      res: CreateMessageResponse
    ) => {
      try {
        const message = await messagesServiceInstance.createMessage(req.body);
        res.status(201).send(message);
      } catch(err) {
        res.status(400).send(err.message);
      }
    }
  )
);
