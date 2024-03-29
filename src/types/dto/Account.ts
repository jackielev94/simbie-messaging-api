import { AccountWithPersonDao, TypeOfAccount } from "../dao";

export interface AccountWithPersonDto {
  accountId: string;
  personId: string;
  email: string;
  nameFirst: string;
  nameLast: string;
  phone: string;
  role: TypeOfAccount;
}

export function mapAccountWithPersonDaoToDto(accountDao: AccountWithPersonDao): AccountWithPersonDto {
  return {
    accountId: accountDao.account_id,
    personId: accountDao.person_id,
    email: accountDao.email,
    nameFirst: accountDao.name_first,
    nameLast: accountDao.name_last,
    phone: accountDao.phone,
    role: accountDao.role
  }
}
