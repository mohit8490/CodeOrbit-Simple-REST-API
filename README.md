# CodeOrbit Task 1 — Simple REST API

## Project
A beginner-friendly REST API built with Node.js and Express for managing notes.

## Technologies
- Node.js
- Express
- Postman

## Features
- Create note
- View all notes
- View a single note
- Update note
- Delete note
- Basic request validation
- HTTP status codes

## Setup
```bash
npm install
npm start
```

Server:
`http://localhost:3001`

## Endpoints
| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/notes` | Get all notes |
| GET | `/api/notes/:id` | Get one note |
| POST | `/api/notes` | Create note |
| PUT | `/api/notes/:id` | Update note |
| DELETE | `/api/notes/:id` | Delete note |

POST/PUT JSON:
```json
{
  "title": "My Note",
  "content": "Learn Express"
}
```
