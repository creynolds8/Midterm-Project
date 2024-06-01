DROP TABLE IF EXISTS accounts CASCADE;
CREATE TABLE accounts (
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  website_name VARCHAR(255) NOT NULL,
  website_url VARCHAR(255),
  organization_id INTEGER REFERENCES organizations(id) ON DELETE CASCADE
);
