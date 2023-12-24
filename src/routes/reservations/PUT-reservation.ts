import { Router } from "express";
import Joi from "joi";
import { reservationsServiceInstance } from "../../dependencyInjection";
import { CreateReservationRequest, CreateReservationResponse } from "../../types/express";
import { validatePayload, wrapAsyncHandler } from "../../util";

export const makeReservation = Router().use(
  validatePayload({
    body: {
      startTime: Joi.number().min(1).max(24).required(),
      restaurantId: Joi.string().uuid().required(),
      numPeople: Joi.number().required(),
      isIndoor: Joi.boolean().required()
    }
  }),
  wrapAsyncHandler(
    async (
      req: CreateReservationRequest,
      res: CreateReservationResponse
    ) => {
      const updatedReservation = await reservationsServiceInstance.makeReservation(req.body)
      res.status(200).send(updatedReservation)
    }
  )
);
