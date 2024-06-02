-- SELECT accounts.*, categories.name
-- FROM accounts JOIN categories ON categories.id = category_id
-- WHERE category_id = 5;


-- -- OR

SELECT DISTINCT categories.name
FROM accounts
JOIN categories ON categories.id = category_id
JOIN organizations ON category_id = categories.id
JOIN users ON organizations.id = users.organization_id
WHERE users.organization_id = 1;


