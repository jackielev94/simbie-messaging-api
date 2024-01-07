
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
    references persons,
);
