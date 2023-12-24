import { TableConfigurationDao } from "../dao";

export interface TableConfigurationDto {
  id: string;
  seats: number;
  isIndoor: boolean;
  restaurantId: string;
 }

 export interface TableConfigurationInput {
  seats: number;
  isIndoor: boolean;
  restaurantId: string;
 }

 export interface CreateTableConfigurationInput {
  restaurantId: string;
  tableConfigurations: Array<TableConfigurationInput>
}

export function mapTableConfigurationDaoToDto(tableConfigDao: TableConfigurationDao): TableConfigurationDto {
  return {
    id: tableConfigDao.id,
    seats: tableConfigDao.seats,
    isIndoor: tableConfigDao.is_indoor,
    restaurantId: tableConfigDao.restaurant_id
  }
}
