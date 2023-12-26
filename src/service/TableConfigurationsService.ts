import { ReservationsDataProvider, RestaurantsDataProvider, TableConfigurationsDataProvider } from "../dataProviders";
import { mapTableConfigurationDaoToDto, RestaurantDao, TableConfigurationDao, TableConfigurationDto, TimeSlot } from "../types";
import { CreateTableConfigurationsRequestInput } from "../types/express";

export class TableConfigurationsService {
  public constructor(
    private readonly restaurantsDataProvider: RestaurantsDataProvider,
    private readonly reservationsDataProvider: ReservationsDataProvider,
    private readonly tableConfigurationsDataProvider: TableConfigurationsDataProvider
  ) {}

  public async createTableConfigurations (input: CreateTableConfigurationsRequestInput): Promise<Array<TableConfigurationDto>> {
    const restaurant = await this.restaurantsDataProvider.getRestaurantById(input.restaurantId)
    const timeSlots = this.createTimeSlots(restaurant);
    return Promise.all(input.tableConfigurations.map(async (tableConfig) => {
      const tableConfiguration = await this.tableConfigurationsDataProvider.createTableConfiguration({...tableConfig, restaurantId: input.restaurantId});
      await this.createReservations(timeSlots, tableConfiguration)
      return mapTableConfigurationDaoToDto(tableConfiguration);
    }))
  }

  public async createReservations(timeSlots: Array<TimeSlot>, tableConfiguration: TableConfigurationDao) {
    await Promise.all(timeSlots.map(async (timeSlot) => {
      await this.reservationsDataProvider.createReservation({
        startTime: timeSlot.startTime,
        endTime: timeSlot.endTime,
        tableConfigurationId: tableConfiguration.id
      })
    }))
  }

  public createTimeSlots(restaurant: RestaurantDao):Array<TimeSlot> {
    let startTime = restaurant.open_time
    const slots = [];
    while (startTime !== restaurant.close_time - 1) {
      slots.push({startTime, endTime: startTime + 2})
      startTime++;
    }
    return slots;
  }
  }
