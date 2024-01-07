
create table patients (
  id uuid not null default uuid_generate_v4(),
    constraint _pk_providers
    primary key (id),
  person_id uuid not null,
    constraint _fk_providers_person_id
    foreign key (person_id)
    references persons,
  created timestamp with time zone not null default current_timestamp
);
