SELECT accounts.*, categories.name
FROM accounts JOIN categories ON categories.id = category_id
WHERE category_id = 5;


-- OR

SELECT categories.name
FROM accounts
JOIN categories ON categories.id = category_id,
JOIN organizations ON category_id = categories.id,
JOIN uses ON categories.id = users.category_id
WHERE users.organization_id;
