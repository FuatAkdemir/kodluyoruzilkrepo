-- 1)
select * from country where country like 'A%a';

-- 2)
select * from country where country like '%_____n';

-- 3)
select * from film where title ilike 't___%';

-- 4)
select * from film where title like 'C%' and length > 90 and rental_rate = 2.99;

