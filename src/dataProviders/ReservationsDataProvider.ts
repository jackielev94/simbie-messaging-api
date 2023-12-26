import { simpleQuery, simpleQuerySingleResult } from "../db";
import { CreateReservationInput, ReservationDao, ReservationWithTableConfigurationDao, UpdateReservationInput } from "../types";
import { reservations_table_name, restaurants_table_name, table_configurations_table_name } from "./constants";

export class ReservationsDataProvider {
  public async createReservation(input: CreateReservationInput): Promise<ReservationDao> {
    const query = `
      insert into ${reservations_table_name}
      (start_time, end_time, table_configuration_id)
      values ($1, $2, $3) returning *
    `
    return simpleQuerySingleResult(query,
      [
        input.startTime,
        input.endTime,
        input.tableConfigurationId
      ]
    );
  }

  public async updateReservation(input: UpdateReservationInput): Promise<ReservationDao> {
    const query = `
      update ${reservations_table_name}
      set open = $1
      where id = $2
      returning *
    `
    return simpleQuerySingleResult(query,
      [
        input.open,
        input.id,
      ]
    );
  }

  public async getReservationWithTableConfigurationById(reservationId: string): Promise<ReservationWithTableConfigurationDao> {
    const query = `
      select res.*, tc.is_indoor, tc.seats from ${reservations_table_name} res
      join ${table_configurations_table_name} tc on res.table_configuration_id = tc.id
      where res.id = $1
    `
    return simpleQuerySingleResult(query, [ reservationId ]);
  }

  public async getOpenReservationsByRestaurantId(restaurantId: string): Promise<Array<ReservationWithTableConfigurationDao>> {
    const query = `
      select res.*, tc.seats, tc.is_indoor
      from ${reservations_table_name} res
      join ${table_configurations_table_name} tc on res.table_configuration_id = tc.id
      join ${restaurants_table_name} rest on tc.restaurant_id = rest.id
      where rest.id = $1 and res.open = true
      order by tc.seats
    `;
    return simpleQuery(query, [ restaurantId ])
  }
}
