import { AuthenticationService, MessagesService, ThreadsService } from "../service";
import { accountsDataProviderInstance, messagesDataProviderInstance, threadsDataProviderInstance } from "./dataProviders";

const messagesServiceInstance = new MessagesService(messagesDataProviderInstance, threadsDataProviderInstance);
const threadsServiceInstance = new ThreadsService(threadsDataProviderInstance, messagesDataProviderInstance)
const authenticationServiceInstance = new AuthenticationService(accountsDataProviderInstance);

export {
  messagesServiceInstance,
  threadsServiceInstance,
  authenticationServiceInstance
}
