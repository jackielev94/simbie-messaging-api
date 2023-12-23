create table restaurants (
  id uuid not null default uuid_generate_v4(),
    constraint _pk_restaurants primary key (id),
  open_time time not null,
  close_time time not null
);
