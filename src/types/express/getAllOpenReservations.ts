import type { Request, Response } from "express";
import { ReservationWithTableConfigurationDto } from "../dto";

export type GetOpenReservationsByRestaurantIdRequestParams = {
  id: string;
}

export type GetOpenReservationsByRestaurantIdRequest = Request<
GetOpenReservationsByRestaurantIdRequestParams
>;

export type GetOpenReservationsByRestaurantIdResponseBody = Array<ReservationWithTableConfigurationDto>;

export type GetOpenReservationsByRestaurantIdResponse = Response<GetOpenReservationsByRestaurantIdResponseBody>;
