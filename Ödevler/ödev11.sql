-- 1)
select first_name from actor union select first_name from customer;

-- 2)
select first_name from actor intersect select first_name from customer;

-- 3)
select first_name from actor except select first_name from customer;

-- 4-a)
select first_name from actor union all select first_name from customer;

-- 4-b) intersect için tekrarlayan veri olmasý söz konusu deðildir. 

-- 4-c) except için tekrarlayan veri olmasý söz konusu deðildir.

