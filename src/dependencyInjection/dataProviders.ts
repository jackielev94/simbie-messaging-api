import { AccountsDataProvider, MessagesDataProvider, ThreadsDataProvider } from "../dataProviders";

const messagesDataProviderInstance = new MessagesDataProvider();
const threadsDataProviderInstance = new ThreadsDataProvider();
const accountsDataProviderInstance = new AccountsDataProvider();

export {
  messagesDataProviderInstance,
  threadsDataProviderInstance,
  accountsDataProviderInstance
}
