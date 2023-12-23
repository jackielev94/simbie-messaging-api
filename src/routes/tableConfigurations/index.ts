import { Router } from "express";
import { createTableConfiguration } from "./POST-table-configurations"

export const tableConfigurationRouter = Router();

tableConfigurationRouter.post("/", createTableConfiguration)
