# Temple API

This API is intended for a team assignment in CSE 341 to learn how to use Swagger for API Documentation.

## Instructions to run application

- Run npm install in the terminal
- npm start

## Things to look out for

- Examine the routes and try a couple with your rest client.
- If you try to run it, you'll get an authentication error from MongoDB.
- Modify your .env file to include your mongoDB username and your db password.
- Import the temples.json file into your mongoDB database in a new collection called temples.

## Revision 2

- Addedd different other endpoint
- Coded the controller logic for the different endpoints 
- published was relised by moving the logic up the findOne route to avoid conflicts.
- Changed coding to asyc and await for better readability
- Added and configured swagger
- Added route.rest file, coded and tested REST operation