import { Router } from "express";
import { createTableConfigurations } from "./POST-table-configurations"

export const tableConfigurationRouter = Router();

tableConfigurationRouter.post("/", createTableConfigurations)
