# express-project-07-simple-crud-api

A simple Express.js CRUD API for notes using in-memory storage.

## Project Goal

This project is built to understand the core CRUD operations in Express.js.

It covers:

- creating a note
- reading all notes
- reading a single note
- updating a note
- deleting a note
- separating code into routes and controllers
- using JSON request bodies
- testing APIs with a REST client

## Tech Stack

- Node.js
- Express.js
- Nodemon

## Features

- GET all notes
- GET single note by id
- POST create note
- PUT update note
- DELETE note
- in-memory data storage using a local array
- modular folder structure with routes and controllers

## Project Structure

```bash
express-project-07-simple-crud-api
│
├── src
│   ├── controllers
│   │   └── notes.controller.js
│   └── routes
│       └── notes.route.js
│
├── api-test.rest
├── index.js
├── package.json
├── package-lock.json
└── .gitignore
```

## Installation

Clone the repository:

```bash
git clone https://github.com/a2rp/express-project-07-simple-crud-api.git
cd express-project-07-simple-crud-api
```

Install dependencies:

```bash
npm install
```

## Run the Project

Run in development mode:

```bash
npm run dev
```

Run normally:

```bash
npm start
```

Server runs at:

```bash
http://localhost:1198
```

## API Endpoints

### Root Route

```http
GET /
```

Response:

```json
{
    "success": true,
    "message": "Simple CRUD API is running"
}
```

### Get All Notes

```http
GET /notes
```

### Get Single Note

```http
GET /notes/:id
```

Example:

```http
GET /notes/1
```

### Create Note

```http
POST /notes
Content-Type: application/json
```

Request body:

```json
{
    "title": "New Note",
    "content": "This is a new note"
}
```

### Update Note

```http
PUT /notes/:id
Content-Type: application/json
```

Example body:

```json
{
    "title": "Updated Note Title",
    "content": "Updated note content"
}
```

### Delete Note

```http
DELETE /notes/:id
```

## Testing APIs

You can test the API using:

- VS Code REST Client extension with `api-test.rest`
- Postman
- Thunder Client
- browser for GET routes

## Important Note

This project uses in-memory storage.

That means:

- notes are stored in a JavaScript array
- data is not saved in a real database
- restarting the server resets the data

This is useful for learning CRUD logic before moving to MongoDB or another database.

## Learning Outcome

By building this project, you learn how to:

- build a CRUD API in Express.js
- organize backend code using routes and controllers
- work with request params and request body
- send proper JSON responses
- handle simple validation
- test APIs during development

## Future Improvements

- connect MongoDB for persistent storage
- add request validation
- use UUID instead of manual id generation
- add timestamps
- add error handling middleware

## Author

Ashish Ranjan

Follow me:

- GitHub: https://github.com/a2rp
- Portfolio: https://www.ashishranjan.net
- LinkedIn: https://www.linkedin.com/in/aashishranjan
- Facebook: https://www.facebook.com/theash.ashish/

## Links

- Portfolio: [https://www.ashishranjan.net](https://www.ashishranjan.net)
- GitHub: [https://github.com/a2rp](https://github.com/a2rp)
- CodePen: [https://codepen.io/ash1198](https://codepen.io/ash1198)
- LinkedIn: [https://www.linkedin.com/in/aashishranjan](https://www.linkedin.com/in/aashishranjan)
- Facebook: [https://www.facebook.com/theash.ashish/](https://www.facebook.com/theash.ashish/)
- YouTube: [https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1](https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1)
- Email: [ash.ranjan09@gmail.com](mailto:ash.ranjan09@gmail.com)

## Support

- Support: [https://a2rp-donation-page.netlify.app/](https://a2rp-donation-page.netlify.app/)
- Buy Me A Coffee: [https://buymeacoffee.com/a2rp](https://buymeacoffee.com/a2rp)
- Patreon: [https://patreon.com/a2rp](https://patreon.com/a2rp)