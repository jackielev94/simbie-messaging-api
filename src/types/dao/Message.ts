
export enum TypeOfMessagePerson {
  SENDER = 'SENDER',
  RECIPIENT = 'RECIPIENT'
}

export interface MessageDao {
  id: string;
  content: string;
  thread_id: string;
  created: string;
  read: boolean;
}

export interface MessagePersonDao {
  id: string;
  person_id: string;
  message_id: string;
  type_of_message_person: TypeOfMessagePerson
}
