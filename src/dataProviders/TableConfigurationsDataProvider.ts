import { simpleQuerySingleResult } from "../db";
import { CreateTableConfigurationDbInput, TableConfigurationDao } from "../types";
import { table_configurations_table_name } from "./constants";

export class TableConfigurationsDataProvider {
  public async createTableConfiguration(input: CreateTableConfigurationDbInput): Promise<TableConfigurationDao> {
    const query = `
      insert into ${table_configurations_table_name}
      (seats, is_indoor, restaurant_id)
      values ($1, $2, $3) returning *
    `
    return simpleQuerySingleResult(query,
      [
        input.seats,
        input.isIndoor,
        input.restaurantId,
      ]
    );
  }

}
