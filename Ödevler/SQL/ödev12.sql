-- 1)
select count(length) from film where length > (select round(avg(length), 3) from film);
-- 489

-- 2)
select count(*) from film where rental_rate = (select max(rental_rate) from film);
-- 336

-- 3)
select * from film where rental_rate = (select min(rental_rate) from film) and replacement_cost = (select min(replacement_cost) from film);

-- 4)
select payment.customer_id, first_name, last_name  from payment join customer on customer.customer_id = payment.customer_id where amount = (select max(amount) from payment);

select sum(amount), first_name, last_name from payment join customer on customer.customer_id = payment.customer_id 
group by customer.customer_id, first_name, last_name order by sum(amount) desc;
