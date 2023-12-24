
export interface ReservationDao {
  id: string;
  start_time: string;
  end_time: string;
  open: boolean;
  table_configuration_id: string;
}

export interface ReservationWithTableConfigurationDao {
  id: string;
  start_time: string;
  end_time: string;
  open: boolean;
  table_configuration_id: string;
  seats: number;
  is_indoor: boolean;
}
