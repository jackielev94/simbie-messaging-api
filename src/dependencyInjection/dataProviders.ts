import { MessagesDataProvider, ThreadsDataProvider } from "../dataProviders";

const messagesDataProviderInstance = new MessagesDataProvider();
const threadsDataProviderInstance = new ThreadsDataProvider();

export {
  messagesDataProviderInstance,
  threadsDataProviderInstance
}
