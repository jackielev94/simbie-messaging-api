
create table threads (
  id uuid not null default uuid_generate_v4(),
    constraint _pk_threads
    primary key (id),
  created timestamp with time zone not null default current_timestamp,
  subject text not null default 'Empty Subject'
);
