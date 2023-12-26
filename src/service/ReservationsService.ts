import { ReservationsDataProvider } from "../dataProviders";
import { mapReservationWithTableConfigurationDaoToDto, ReservationWithTableConfigurationDto } from "../types";
import { CreateReservationRequestInput } from "../types/express";

export class ReservationsService {
  public constructor(
    private readonly reservationsDataProvider: ReservationsDataProvider,
  ) {}

  public async makeReservation(input: CreateReservationRequestInput): Promise<ReservationWithTableConfigurationDto> {
    const openReservations = await this.getOpenReservationsByRestaurantId(input.restaurantId);
    const filteredReservations = this.filterReservationsByRequestDetails(openReservations, input);
    if (filteredReservations.length) {
      const updatedReservation = await this.reservationsDataProvider.updateReservation({
        // this will take the reservation with the lowest number of seats, correct location, and correct start time from the filtered list
        id: filteredReservations[0].id,
        open: false
      });
      return this.getReservationWithTableConfigurationById(updatedReservation.id)
    }
    throw Error("There are no reservations that meet your requirements")
  }

  public async getOpenReservationsByRestaurantId(restaurantId: string): Promise<Array<ReservationWithTableConfigurationDto>> {
    const reservations = await this.reservationsDataProvider.getOpenReservationsByRestaurantId(restaurantId);
    return reservations.map(mapReservationWithTableConfigurationDaoToDto);
  }

  public async getReservationWithTableConfigurationById(reservationId: string): Promise<ReservationWithTableConfigurationDto> {
    const reservation = await this.reservationsDataProvider.getReservationWithTableConfigurationById(reservationId);
    return mapReservationWithTableConfigurationDaoToDto(reservation);
  }

  private filterReservationsByRequestDetails(openReservations: Array<ReservationWithTableConfigurationDto>, input: CreateReservationRequestInput): Array<ReservationWithTableConfigurationDto> {
    return openReservations.filter((res) => {
      return res.startTime === input.startTime
      && res.seats >= input.numPeople
      && res.seats <= input.numPeople + 1
      && res.isIndoor === input.isIndoor;
    });
  }

}
