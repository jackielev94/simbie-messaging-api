
export enum TypeOfAccount {
  PATIENT = 'PATIENT',
  PROVIDER = 'PROVIDER'
}

export interface AccountWithPersonDao {
  account_id: string;
  person_id: string;
  email: string;
  name_first: string,
  name_last: string;
  role: TypeOfAccount
  phone: string;
}
