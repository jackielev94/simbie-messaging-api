import { TableConfigurationDao } from "../dao";

export interface CreateTableConfigurationInput {
  seats: number;
  isIndoor: boolean;
  restaurantId: string;
}

export interface TableConfigurationDto {
  id: string;
  seats: number;
  isIndoor: boolean;
  restaurantId: string;
 }

export function mapTableConfigurationDaoToDto(tableConfigDao: TableConfigurationDao): TableConfigurationDto {
  return {
    id: tableConfigDao.id,
    seats: tableConfigDao.seats,
    isIndoor: tableConfigDao.is_indoor,
    restaurantId: tableConfigDao.restaurant_id,
  }
}
