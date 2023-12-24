import { ReservationsDataProvider } from "../dataProviders";
import { CreateReservationInput, MakeReservationInput, mapReservationDaoToDto, mapReservationWithTableConfigurationDaoToDto, ReservationDto, ReservationWithTableConfigurationDto } from "../types";

export class ReservationsService {
  public constructor(
    private readonly reservationsDataProvider: ReservationsDataProvider,
  ) {}

  public async makeReservation(input: MakeReservationInput): Promise<ReservationDto> {
    const openReservations = await this.getOpenReservationsByRestaurantId(input.restaurantId);
    const filteredReservations = openReservations.filter((res) => {
      return res.startTime === input.startTime
      && res.seats >= input.numPeople
      && res.seats <= input.numPeople + 1
      && res.isIndoor === input.isIndoor;
    });
    const updatedReservation = await this.reservationsDataProvider.updateReservation({
      id: filteredReservations[0].id,
      open: false
    });
    return mapReservationDaoToDto(updatedReservation);
  }

  public async getOpenReservationsByRestaurantId(restaurantId: string): Promise<Array<ReservationWithTableConfigurationDto>> {
    const reservations = await this.reservationsDataProvider.getOpenReservationsByRestaurantId(restaurantId);
    return reservations.map(mapReservationWithTableConfigurationDaoToDto);
  }

}
