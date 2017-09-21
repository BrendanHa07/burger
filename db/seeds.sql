-- Use the database
USE burger_db;

-- insert 3 burgers
insert into burgers (burger_name, devoured, date)
values("Double Bacon Cheeseburger", false, CURRENT_TIMESTAMP),
        ("Bacon Avocado Cheeseburger", false, CURRENT_TIMESTAMP),
        ("Ultimate Breakfast Burger". false, CURRENT_TIMESTAMP);