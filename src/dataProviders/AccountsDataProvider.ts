import { simpleQuerySingleResult } from "../db";
import { LoginInput } from "../types";
import { AccountWithPersonDao } from "../types/dao/Account";
import { accounts_table_name, persons_table_name } from "./constants";

export class AccountsDataProvider {
  public async getAccountByEmailAndPassword(input: LoginInput): Promise<AccountWithPersonDao> {
    const query = `
      select a.id as account_id,
      p.id as person_id,
      p.email as email,
      p.name_first as name_first,
      p.name_last as name_last,
      p.phone as phone
      from ${accounts_table_name} a
      join ${persons_table_name} p
      on a.id = p.account_id
      where a.email = $1 and password = $2
    `;
    return simpleQuerySingleResult(query, [input.email, input.password])
  }
}
