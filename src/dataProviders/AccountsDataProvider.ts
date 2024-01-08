import { simpleQuerySingleResult } from "../db";
import { LoginInput } from "../types";
import { AccountDao } from "../types/dao/Account";
import { accounts_table_name } from "./constants";

export class AccountsDataProvider {
  public async getAccountByEmailAndPassword(input: LoginInput): Promise<AccountDao> {
    const query = `
      select * from ${accounts_table_name}
      where email = $1 and password = $2
    `;
    return simpleQuerySingleResult(query, [input.email, input.password])
  }
}
