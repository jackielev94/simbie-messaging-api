import { simpleQuerySingleResult } from "../db";
import { RestaurantDao } from "../types";
import { restaurants_table_name } from "./constants";


export class RestaurantsDataProvider {
  public async getRestaurantById(id: string): Promise<RestaurantDao> {
    const query = `
      select * from ${restaurants_table_name}
      where id = $1
    `
    return simpleQuerySingleResult(query, [id])
  }
}
