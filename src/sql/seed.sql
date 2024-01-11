
insert into accounts (email, password, role) values
('testpatient1@email.com', 'testpatient1pass', 'PATIENT'),
('testpatient2@email.com', 'testpatient2pass', 'PATIENT'),
('testpatient3@email.com', 'testpatient3pass', 'PATIENT'),
('testprovider1@email.com', 'testprovider1pass', 'PROVIDER'),
('testprovider2@email.com', 'testprovider2pass', 'PROVIDER'),
('testprovider3@email.com', 'testprovider3pass', 'PROVIDER');

insert into persons (email, name_first, name_last, phone, account_id)
(select email, 'Nurse', 'Jackie', '1234567890', id from accounts a where a.email = 'testpatient1@email.com');
insert into persons (email, name_first, name_last, phone, account_id)
(select email, 'Gregory', 'House', '1234567890', id from accounts a where a.email = 'testpatient2@email.com');
insert into persons (email, name_first, name_last, phone, account_id)
(select email, 'Meredith', 'Grey', '1234567890', id from accounts a where a.email = 'testpatient3@email.com');
insert into persons (email, name_first, name_last, phone, account_id)
(select email, 'Derek', 'McDreamy', '1234567890', id from accounts a where a.email = 'testprovider1@email.com');
insert into persons (email, name_first, name_last, phone, account_id)
(select email, 'Elliot', 'Reid', '1234567890', id from accounts a where a.email = 'testprovider1@email.com');
insert into persons (email, name_first, name_last, phone, account_id)
(select email, 'John', 'Carter', '1234567890', id from accounts a where a.email = 'testprovider1@email.com');
