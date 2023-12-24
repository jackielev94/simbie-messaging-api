import type { Request, Response } from "express";
import { ReservationDto } from "../dto";

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

export type CreateReservationResponseBody = ReservationDto;

export type CreateReservationResponse = Response<CreateReservationResponseBody>
