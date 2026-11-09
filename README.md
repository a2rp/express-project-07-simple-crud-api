# express-project-07-simple-crud-api

A learning project for building a notes CRUD API with Express.js. Notes are held in memory; restarting the server resets them.

## Features

- List notes and fetch one note by ID
- Create, fully replace, partially update, and delete notes
- Validate IDs and note fields
- Return JSON responses for malformed JSON

## Requirements and setup

Use Node.js 18 or later. Install dependencies:

```bash
npm install
```

Start with automatic restarts during development:

```bash
npm run dev
```

Or start the server directly:

```bash
npm start
```

The API listens at `http://localhost:1198`. Example requests are in [`api-test.rest`](./api-test.rest), for the VS Code REST Client.

## Endpoints

| Method | Path | Behavior |
| --- | --- | --- |
| `GET` | `/` | API status message |
| `GET` | `/notes` | Return all notes |
| `GET` | `/notes/:id` | Return a note by positive integer ID |
| `POST` | `/notes` | Create a note |
| `PUT` | `/notes/:id` | Replace both note fields |
| `PATCH` | `/notes/:id` | Update title, content, or both |
| `DELETE` | `/notes/:id` | Delete a note |

Send JSON with `Content-Type: application/json`. A note needs a non-empty `title` (up to 120 characters) and `content` (up to 5,000 characters). Unknown fields, blank values, and invalid IDs return `400 Bad Request`; a valid ID with no matching note returns `404 Not Found`. Malformed JSON also returns `400`.

### Create a note

```http
POST /notes
Content-Type: application/json
```

```json
{
  "title": "New Note",
  "content": "This is a new note"
}
```

### Replace a note

`PUT` requires both `title` and `content`:

```http
PUT /notes/1
Content-Type: application/json
```

```json
{
  "title": "Updated Note",
  "content": "Updated note content"
}
```

### Partially update a note

`PATCH` accepts either field, or both:

```http
PATCH /notes/2
Content-Type: application/json
```

```json
{
  "title": "Updated title only"
}
```

## Storage

The starter dataset and later changes live in a JavaScript array. This demonstrates CRUD behavior without a database; all changes disappear when the process restarts.

## Author and links

- GitHub: https://github.com/a2rp
- Portfolio: https://www.ashishranjan.net
- LinkedIn: https://www.linkedin.com/in/aashishranjan
- Facebook: https://www.facebook.com/theash.ashish/
- CodePen: https://codepen.io/ash1198
- YouTube: https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1
- Email: ash.ranjan09@gmail.com
- Support: https://a2rp-donation-page.netlify.app/
- Buy Me a Coffee: https://buymeacoffee.com/ashishranjan
- Patreon: https://patreon.com/ashishranjan