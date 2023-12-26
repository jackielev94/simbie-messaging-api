import { Router } from "express";
import Joi from "joi";
import { tableConfigurationsServiceInstance } from "../../dependencyInjection";
import { CreateTableConfigurationsRequest, CreateTableConfigurationsResponse } from "../../types/express";
import { validatePayload, wrapAsyncHandler } from "../../util";

export const createTableConfigurations = Router().use(
  validatePayload({
    body: Joi.object({
      restaurantId: Joi.string().uuid().required(),
      tableConfigurations: Joi.array().items(
        Joi.object({
          seats: Joi.number().required(),
          isIndoor: Joi.boolean().required()
        })
      )
    })
  }),
  wrapAsyncHandler(
    async (
      req: CreateTableConfigurationsRequest,
      res: CreateTableConfigurationsResponse
    ) => {
      try {
        const tableConfigurations = await tableConfigurationsServiceInstance.createTableConfigurations(req.body);
        res.status(201).send(tableConfigurations);
      } catch(err) {
        res.status(400).send(err.message);
      }
    }
  )
);
