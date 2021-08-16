-- 1)
select rating, count(*) from film group by rating;

-- 2)
select replacement_cost, count(*) from film group by replacement_cost having count (*) > 50;

-- 3)
select store_id, count(distinct(customer_id)) from customer group by store_id;
-- Store_id 1 = 326, Store_id 2 = 273

-- 4)
select country_id, count(*) from city group by country_id order by count(*) desc limit 1;
-- country_id = 44, city = 60
