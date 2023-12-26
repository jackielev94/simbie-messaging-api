import { Router } from "express";
import Joi from "joi";
import { reservationsServiceInstance } from "../../dependencyInjection";
import { GetOpenReservationsByRestaurantIdRequest, GetOpenReservationsByRestaurantIdResponse } from "../../types/express";
import { validatePayload, wrapAsyncHandler } from "../../util";


export const getAllReservationsForRestaurant = Router({mergeParams: true}).use(
  validatePayload({
    params: {
      id: Joi.string().uuid().required()
    }
  }),
  wrapAsyncHandler(
    async (
      req: GetOpenReservationsByRestaurantIdRequest,
      res: GetOpenReservationsByRestaurantIdResponse
    ) => {
      try {
        const reservations = await reservationsServiceInstance.getOpenReservationsByRestaurantId(req.params.id);
        res.status(200).send(reservations);
      } catch(err) {
        res.status(400).send(err.message);
      }
    }
  )
);
