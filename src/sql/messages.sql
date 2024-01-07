
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
