create type type_of_message_person as enum (
  'SENDER',
  'RECIPIENT'
);

create table messages_persons (
  id uuid not null default uuid_generate_v4(),
    constraint _pk_messages_persons
    primary key (id),
  created timestamp with time zone not null default current_timestamp,
  message_id uuid not null,
    constraint _fk_messages_persons_message_id
    foreign key (message_id)
    references messages,
  person_id uuid not null,
    constraint _fk_messages_persons_person_id
    foreign key (person_id)
    references persons
  person_role type_of_message_person not null
);
