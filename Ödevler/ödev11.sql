-- 1)
select first_name from actor union select first_name from customer;

-- 2)
select first_name from actor intersect select first_name from customer;

-- 3)
select first_name from actor except select first_name from customer;

-- 4-a)
select first_name from actor union all select first_name from customer;

-- 4-b) intersect i�in tekrarlayan veri olmas� s�z konusu de�ildir. 

-- 4-c) except i�in tekrarlayan veri olmas� s�z konusu de�ildir.

