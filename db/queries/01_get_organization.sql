SELECT organization.name
FROM users
JOIN organizations ON organizations.id = organization_id
WHERE user.id = 1;

