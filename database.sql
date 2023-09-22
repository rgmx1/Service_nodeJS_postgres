create table persone(
id SERIAL PRIMARY KEY,
name VARCHAR(255),
surname VARCHAR(255)
);


create table pet(
id SERIAL PRIMARY KEY,
name VARCHAR(255),
age INTEGER,
user_id INTEGER,
FOREIGN KEY (user_id) REFERENCES persone (id)
);