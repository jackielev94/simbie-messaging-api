import { AccountsDataProvider } from "../dataProviders";
import { AccountWithPersonDto, mapAccountWithPersonDaoToDto, TypeOfAccount } from "../types";

export class AccountsService {
  public constructor(
    private accountsDataProviderInstance: AccountsDataProvider
  ) {}

  public async getAccountsByRole(role: TypeOfAccount): Promise<Array<AccountWithPersonDto>> {
    const accounts = await this.accountsDataProviderInstance.getAccountsByRole(role);
    return accounts.map(mapAccountWithPersonDaoToDto)
  }
}
