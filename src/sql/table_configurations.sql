create table table_configurations (
  id uuid not null default uuid_generate_v4(),
    constraint _pk_table_configurations
    primary key (id),
  seats smallint not null,
  is_indoor boolean,
  restaurant_id uuid not null,
    constraint _fk_table_configurations_restaurant_id
    foreign key (restaurant_id)
    references restaurants
);
