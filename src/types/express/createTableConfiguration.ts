import type { Request, Response } from "express";
import { TableConfigurationDto } from "../dto";

export type CreateTableConfigurationInput = {
  seats: number;
  isIndoor: boolean;
}

export type CreateTableConfigurationsRequestInput = {
  restaurantId: string;
  tableConfigurations: Array<CreateTableConfigurationInput>
}

export type CreateTableConfigurationsRequest = Request<
  never,
  never,
  CreateTableConfigurationsRequestInput
>;

export type CreateTableConfigurationsResponseBody = Array<TableConfigurationDto>;

export type CreateTableConfigurationsResponse = Response<CreateTableConfigurationsResponseBody>;
