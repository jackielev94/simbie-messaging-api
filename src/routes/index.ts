import { Router } from "express";
import { reservationsRouter } from "./reservations";
import { restaurantsRouter } from "./restaurants";
import { tableConfigurationsRouter } from "./tableConfigurations";


export const rootRouter = Router();

rootRouter.use("/restaurants", restaurantsRouter);
rootRouter.use("/reservations", reservationsRouter);
rootRouter.use("/table-configurations", tableConfigurationsRouter);
