create table reservations (
  id uuid not null default uuid_generate_v4(),
    constraint _pk_reservations
    primary key (id),
  start_time timestamp not null,
  end_time timestamp not null,
  open boolean not null default true,
  table_configuration_id uuid not null,
    constraint _fk_reservations_table_configuration_id
    foreign key (table_configuration_id)
    references table_configurations
);
