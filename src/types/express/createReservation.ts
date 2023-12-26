import type { Request, Response } from "express";
import { ReservationWithTableConfigurationDto } from "../dto";

export type CreateReservationRequestInput = {
  startTime: number;
  restaurantId: string;
  numPeople: number;
  isIndoor: boolean;
}

export type CreateReservationRequest = Request<
  never,
  never,
  CreateReservationRequestInput
>;

export type CreateReservationResponseBody = ReservationWithTableConfigurationDto;

export type CreateReservationResponse = Response<CreateReservationResponseBody>
