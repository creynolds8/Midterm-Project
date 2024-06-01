SELECT accounts.*, categories.name
FROM accounts JOIN categories ON categories.id = category_id
WHERE category_id = 5;
