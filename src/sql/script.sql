create database simbie_take_home;

create EXTENSION if not exists "uuid-ossp";

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

create table threads (
  id uuid not null default uuid_generate_v4(),
    constraint _pk_threads
    primary key (id),
  created timestamp with time zone not null default current_timestamp,
  subject text not null default 'Empty Subject'
);

create table messages (
  id uuid not null default uuid_generate_v4(),
    constraint _pk_messages
    primary key (id),
  content text not null,
  thread_id uuid not null,
    constraint _fk_messages_thread_id
    foreign key (thread_id)
    references threads,
  created timestamp with time zone not null default current_timestamp,
  read boolean not null default false
);

create table threads_persons (
  id uuid not null default uuid_generate_v4(),
    constraint _pk_threads_persons
    primary key (id),
  created timestamp with time zone not null default current_timestamp,
  thread_id uuid not null,
    constraint _fk_threads_persons_thread_id
    foreign key (thread_id)
    references threads,
  person_id uuid not null,
    constraint _fk_threads_persons_person_id
    foreign key (person_id)
    references persons
);

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
    references persons,
  person_role type_of_message_person not null
);
