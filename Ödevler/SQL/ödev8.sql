select * from employee;

-- U 1) 
update employee
set id = 1,
	name = 'Fuat',
	email = 'info@fuatakdemir.com'
where name = 'Mahalia'
returning *;


-- U 2)
update employee
set birthday = '13/07/1872',
	name = 'Test Kullanýcý'
where birthday = '2013-11-17'
returning *;

-- U 3)
update employee
set id = 3
where name = 'Test Kullanýcý'
returning *; 

-- U 4)
update employee
set birthday = '03-09-2020',
	email = 'e@mail.com',
	id = 5
where name = 'Beltran'

-- U 5)
update employee
set name = 'Fuat Akdemir',
	birthday = '01/01/1900'
where name = 'Fuat'

-- D 1)
delete from employee where name = 'Jared';

-- D 2)
delete from employee where birthday = '2017-11-08' returning *; 

-- D 3)
delete from employee where id = 5 returning *;

-- D 4)
delete from employee where email like '%@about.com' returning *;

-- D 5)
delete from employee where id not in (1, 5) returning *;

