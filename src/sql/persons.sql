
create table persons (
  id uuid not null default uuid_generate_v4(),
    constraint _pk_accounts
    primary key (id),
  email text not null,
  name_first text not null,
  name_last text not null,
  phone text not null,
  account_id uuid not null,
    constraint _fk_persons_account_id
    foreign key (account_id)
    references accounts,
  created timestamp with time zone not null default current_timestamp
);
