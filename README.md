# WELCOME TO OUR MIDTERM PROJECT: BeeSecure

BeeSecure is a password storage app that connects multiple users to a single organization. Each user connencted to an organization can access the same account information for easy information sharing and access throughout an organization. Users can access, create, and edit account information like the username and password for each account.

## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information 
  - username: `labber` 
  - password: `labber` 
  - database: `midterm`
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Reset database: `npm run db:reset`
  - Check the db folder to see what gets created and seeded in the SDB
7. Run the server: `npm run local`
  - Note: nodemon is used, so you should not have to restart your server
8. Visit `http://localhost:8080/`

## Dependencies

- Chalk
- Cookie-sessions
- Dotenv
- EJS
- Express
- Pg
- Sass
