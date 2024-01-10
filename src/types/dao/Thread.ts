
export interface ThreadDao {
  id: string;
  created: string;
  subject: string;
}

export interface ThreadPersonDao {
  id: string;
  person_id: string;
  thread_id: string;
}
