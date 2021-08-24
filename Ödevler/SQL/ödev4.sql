-- 1)
select distinct replacement_cost from film;

-- 2)
select count(distinct replacement_cost) from film;
-- 21

-- 3)
select count(*) from film where title like 'T%' and rating = 'G';
-- 9

-- 4)
select count(*) from country where country like '_____';
-- 13

-- 5)
select count(*) from city where city ilike '%R';
-- 33


