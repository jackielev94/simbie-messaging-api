import { AuthenticationService, MessagesService, ThreadsService, AccountsService } from "../service";
import { accountsDataProviderInstance, messagesDataProviderInstance, threadsDataProviderInstance } from "./dataProviders";

const messagesServiceInstance = new MessagesService(messagesDataProviderInstance, threadsDataProviderInstance);
const threadsServiceInstance = new ThreadsService(threadsDataProviderInstance, messagesDataProviderInstance)
const authenticationServiceInstance = new AuthenticationService(accountsDataProviderInstance);
const accountsServiceInstance = new AccountsService(accountsDataProviderInstance);

export {
  messagesServiceInstance,
  threadsServiceInstance,
  authenticationServiceInstance,
  accountsServiceInstance
}
