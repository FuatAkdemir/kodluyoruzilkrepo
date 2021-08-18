-- 1)
select city, country from city inner join country on country.country_id = city.country_id;

-- 2)
select payment_id, first_name, last_name from customer inner join payment on customer.customer_id = payment.customer_id;

-- 3)
select rental_id, first_name, last_name from customer inner join rental on rental.customer_id = customer.customer_id
