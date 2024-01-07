
export interface ThreadDao {
  id: string;
  created: string;
}

export interface ThreadPersonDao {
  id: string;
  person_id: string;
  thread_id: string;
}
