import { ReservationsDataProvider, RestaurantsDataProvider, TableConfigurationsDataProvider } from "../dataProviders"

const restaurantsDataProviderInstance = new RestaurantsDataProvider();
const reservationsDataProviderInstance = new ReservationsDataProvider();
const tableConfigurationsDataProviderInstance = new TableConfigurationsDataProvider();

export {
  reservationsDataProviderInstance,
  restaurantsDataProviderInstance,
  tableConfigurationsDataProviderInstance
}
