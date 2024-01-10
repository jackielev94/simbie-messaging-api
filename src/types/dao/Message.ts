
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
  subject: string;
}

export interface MessagePersonDao {
  id: string;
  person_id: string;
  message_id: string;
  person_role: TypeOfMessagePerson,
  name_first: string;
  name_last: string;
}
