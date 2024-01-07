import { MessagesService } from "../service";
import { messagesDataProviderInstance, threadsDataProviderInstance } from "./dataProviders";

const messagesServiceInstance = new MessagesService(messagesDataProviderInstance, threadsDataProviderInstance);
const threadsServiceInstance = new ThreadsService()

export {
  messagesServiceInstance
}
