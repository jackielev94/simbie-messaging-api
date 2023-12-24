import { ReservationDao, ReservationWithTableConfigurationDao } from "../dao";

export interface ReservationDto {
  id: string;
  startTime: string;
  endTime: string;
  open: boolean;
  tableConfigurationId: string;
}

export interface ReservationWithTableConfigurationDto {
  id: string;
  startTime: string;
  endTime: string;
  open: boolean;
  tableConfigurationId: string;
  seats: number;
  isIndoor: boolean;
}

export interface UpdateReservationInput {
  id: string;
  open: boolean;
}

export interface CreateReservationInput {
  startTime: string;
  endTime: string;
  tableConfigurationId: string;
}

export interface TimeSlot {
  startTime: string;
  endTime: string;
}

export function mapReservationDaoToDto(resDao: ReservationDao): ReservationDto {
  return {
    id: resDao.id,
    startTime: resDao.start_time,
    endTime: resDao.end_time,
    open: resDao.open,
    tableConfigurationId: resDao.table_configuration_id,
  }
}

export function mapReservationWithTableConfigurationDaoToDto(resDao: ReservationWithTableConfigurationDao): ReservationWithTableConfigurationDto {
  return {
    id: resDao.id,
    startTime: resDao.start_time,
    endTime: resDao.end_time,
    open: resDao.open,
    tableConfigurationId: resDao.table_configuration_id,
    seats: resDao.seats,
    isIndoor: resDao.is_indoor
  }
}
