
export interface ReservationDao {
  id: string;
  start_time: number;
  end_time: number;
  open: boolean;
  table_configuration_id: string;
}

export interface ReservationWithTableConfigurationDao {
  id: string;
  start_time: number;
  end_time: number;
  open: boolean;
  table_configuration_id: string;
  seats: number;
  is_indoor: boolean;
}
