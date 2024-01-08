import { AccountsDataProvider } from "../dataProviders";
import { LoginRequestQuery, LoginSuccess } from "../types";

export class AuthenticationService {
  public constructor(
    private readonly accountsDataProvider: AccountsDataProvider,
  ) {}

  public async getAccountByEmailAndPassword(input: LoginRequestQuery): Promise<LoginSuccess> {
    const account =  this.accountsDataProvider.getAccountByEmailAndPassword(input);
    if (account) {
      return {
        success: true
      }
    }
    return {
      success: false
    }
  }
}
