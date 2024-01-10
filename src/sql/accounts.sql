
create type type_of_account as enum (
  'PATIENT',
  'PROVIDER'
);

create table accounts (
  id uuid not null default uuid_generate_v4(),
    constraint _pk_accounts
    primary key (id),
  email text not null,
  password text not null,
  created timestamp with time zone not null default current_timestamp,
  role type_of_account not null
);
