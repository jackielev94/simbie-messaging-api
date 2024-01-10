import { AccountsDataProvider } from "../dataProviders";
import { LoginRequestQuery, LoginSuccess, mapAccountWithPersonDaoToDto } from "../types";

export class AuthenticationService {
  public constructor(
    private readonly accountsDataProvider: AccountsDataProvider,
  ) {}

  public async getAccountByEmailAndPassword(input: LoginRequestQuery): Promise<LoginSuccess> {
    const account =  await this.accountsDataProvider.getAccountByEmailAndPassword(input);
    if (account) {
      return {
        success: true,
        account: mapAccountWithPersonDaoToDto(account)
      }
    }
    return {
      success: false
    }
  }
}
