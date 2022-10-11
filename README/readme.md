# Users API
### By Jackline Njoroge - linkedin.com/in/jackie-njoroge-47235a228
## Description
This is a bare-bone example of getting started with Rest Api using nodejs and express. <br>

The entire application is contained within the backend folder.

## Technologies used
- Visual studio code ide
- Postman -> testing our end points
- Mongodb -> act as no-sql database to store users
- Robomongo -> provide a visual interface for mongodb

## Features
- Express
- REST API

## Requirements
- git
- node and npm

## Setup and installation
- https://github.com/bobbinnej/RestApi.git
- cd backend
- npm init -y
- npm start

## Working of the api
Model present
- newuser.js <br>


Api routes

- get a list of all users<br>
GET<br>
http://localhost:3002/api/users


- add a new user to mongodb<br>
POST<br>
http://localhost:3002/api/users<br>
 Body:<br>
  {"name":"sarah",
  "email":"sarahk@gmail.com",
 "password":"123456"

}
  
- update existing user in the database<br>
PUT<br>
http://localhost:3002/api/users/:id



- delete a single user from database<br>
DELETE<br>
http://localhost:3002/api/users/:id


## Development

To fix a bug or enhance an existing module, follow these steps:
- Fork the repo
- Create a new branch (git checkout -b improve-feature)
- Make the appropriate changes in the files
- Add changes to reflect the changes made
- Commit your changes (git commit -am 'Improve feature')
- Push to the branch (git push origin improve-feature)
- Create a Pull Request


## Known Bugs

If you find a bug or would like to request a new function, reach out to me via bobbinnej@gmail.com
