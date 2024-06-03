  SELECT DISTINCT accounts.*
  FROM accounts
  JOIN categories ON categories.id = category_id
  JOIN organizations ON category_id = categories.id
  JOIN users ON organizations.id = users.organization_id
  WHERE categories.id = "" AND users.organization_id = (SELECT organization_id
    FROM users
    WHERE users.id = 2);


-- const getAccountsByCategory = function(userId) {
--   const queryStr = `
--   SELECT DISTINCT accounts.*
--   FROM accounts
--   JOIN categories ON categories.id = category_id
--   JOIN organizations ON category_id = categories.id
--   JOIN users ON organizations.id = users.organization_id
--   WHERE users.organization_id = (SELECT organization_id
--     FROM users
--     WHERE users.id = $1;);
--     `;
--   const queryArgs = [userId];
--   return db.query(queryStr, queryArgs)
--     .then((results) => {
--       return results.rows;
--     })
--     .catch((err) => {
--       console.log(err.message);
--     });
-- };
