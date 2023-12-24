import { Router } from "express";
import { createTableConfigurations } from "./POST-table-configurations"

export const tableConfigurationsRouter = Router();

tableConfigurationsRouter.post("/", createTableConfigurations)
