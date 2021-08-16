-- 1)
select avg(rental_rate) from film;

-- 2)
select count(*) from film where title like 'C%';
-- 92

-- 3)
select max(length) from film where rental_rate = 0.99
-- 184

-- 4)
select count(distinct(replacement_cost)) from film where length > 150;
-- 21
