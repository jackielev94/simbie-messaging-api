create table restaurants (
  id uuid not null default uuid_generate_v4(),
    constraint _pk_restaurants primary key (id),
  open_time smallint not null,
  close_time smallint not null
);
