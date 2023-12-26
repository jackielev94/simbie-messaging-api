import { ReservationsService, TableConfigurationsService } from "../service";
import { reservationsDataProviderInstance, restaurantsDataProviderInstance, tableConfigurationsDataProviderInstance } from "./dataProviders";

const reservationsServiceInstance = new ReservationsService(reservationsDataProviderInstance);
const tableConfigurationsServiceInstance = new TableConfigurationsService(restaurantsDataProviderInstance, reservationsDataProviderInstance, tableConfigurationsDataProviderInstance);

export {
  reservationsServiceInstance,
  tableConfigurationsServiceInstance
}
