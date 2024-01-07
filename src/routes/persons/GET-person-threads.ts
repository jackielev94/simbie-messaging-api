import { Router } from "express";
import Joi from "joi";
import { threadsServiceInstance } from "../../dependencyInjection";
import { GetThreadsWithMessagesRequest, GetThreadsWithMessagesResponse } from "../../types";
import { validatePayload, wrapAsyncHandler } from "../../util";


export const getThreadsWithMessages = Router({mergeParams: true}).use(
  validatePayload({
    params: {
      id: Joi.string().uuid().required()
    }
  }),
  wrapAsyncHandler(
    async (
      req: GetThreadsWithMessagesRequest,
      res: GetThreadsWithMessagesResponse
    ) => {
      try {
        const threads = await threadsServiceInstance.getThreadsWithMessagesByPersonId(req.params.id);
        res.status(200).send(threads);
      } catch(err) {
        res.status(400).send(err.message);
      }
    }
  )
);
