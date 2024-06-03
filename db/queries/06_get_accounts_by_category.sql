  SELECT DISTINCT accounts.*
  FROM accounts
  JOIN categories ON categories.id = category_id
  JOIN organizations ON category_id = categories.id
  JOIN users ON organizations.id = users.organization_id
  WHERE categories.id = 1 AND accounts.organization_id = (SELECT organization_id
    FROM users
    WHERE users.id = 1);
