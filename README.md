# Shop
Shop DevMountain Personal Project

Things I did before we started
ran npx create-react-app app-name and cd'd into it
added .env to .gitignore file
created a components folder with skeleton components for Header, Dash, Products, Cart and Auth
Cleared out default info in ./src/App.js
Created a db folder in the root folder with a seed.sql file inside
Populated seed.sql file with information we will use in our tables
Created a server folder in the root folder with an index.js file inside
populated ./server/index.js with some default information
added "main": "server/index.js", and "proxy": "http://localhost:3333", to our package.json

Planned steps:
create .env with correct info
set up our server with controllers and endpoints for auth, products, and cart
set up database queries for auth, products, and cart
build out routes on the frontend to display our various components
finish Header component for routing around our site
build out redux to store our user information after registering/logging in
build out Auth/Products/Cart pages to display information fetched from the server
