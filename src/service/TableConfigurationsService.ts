import { ReservationsDataProvider, RestaurantsDataProvider, TableConfigurationsDataProvider } from "../dataProviders";
import { CreateTableConfigurationInput, mapTableConfigurationDaoToDto, RestaurantDao, TableConfigurationDao, TableConfigurationDto, TimeSlot } from "../types";
import { addTwoHours } from "../util/times";

export class TableConfigurationsService {
  public constructor(
    private readonly restaurantsDataProvider: RestaurantsDataProvider,
    private readonly reservationsDataProvider: ReservationsDataProvider,
    private readonly tableConfigurationsDataProvider: TableConfigurationsDataProvider
  ) {}

  public async createTableConfiguration (input: CreateTableConfigurationInput): Promise<Array<TableConfigurationDto>> {
    const restaurant = await this.restaurantsDataProvider.getRestaurantById(input.restaurantId)
    const timeSlots = this.createTimeSlots(restaurant);
    return Promise.all(input.tableConfigurations.map(async (tableConfig) => {
      const tableConfiguration = await this.tableConfigurationsDataProvider.createTableConfiguration(tableConfig);
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

  private createTimeSlots(restaurant: RestaurantDao):Array<TimeSlot> {
    let startTime = restaurant.open_time
    const slots = [];
    // assumption: close time is actually last reservation time
    while (startTime !== restaurant.close_time) {
      const plusTwoHours = addTwoHours(startTime)
      slots.push({startTime, endTime: plusTwoHours})
      startTime = plusTwoHours;
    }
    return slots;
  }
  }
