# 🎬 Movies API
 
A RESTful API built with **Node.js** and **Express** that manages a movie collection.  
Data is stored in a local **JSON file** — no external database required.
 
---
 
## 📁 Project Structure
 
```
movies-api/
├── data/
│   └── movies.json          # JSON file acting as the database
├── routes/
│   └── movieRoutes.js       # Maps endpoints to controller functions
├── controllers/
│   └── movieController.js   # All business logic for CRUD operations
├── utils/
│   ├── readFile.js          # Reads and parses the JSON database
│   └── writeFile.js         # Writes updated data back to the JSON file
├── server.js                # Entry point — sets up Express and middleware
├── package.json
└── README.md
```
 
---
 
## 🚀 Getting Started
 
### 1. Install dependencies
```bash
npm install
```
 
### 2. Start the server
```bash
# Production
npm start
 
# Development (auto-restarts on file change)
npm run dev
```
 
Server runs at: `http://localhost:3000`
 
---
 
## 🎥 Resource: Movie
 
Each movie object contains the following fields:
 
| Field         | Type     | Required | Description                         |
|---------------|----------|----------|-------------------------------------|
| `id`          | String   | Auto     | Unique ID (auto-generated)          |
| `title`       | String   | ✅       | Movie title                         |
| `genre`       | String   | ✅       | Genre (e.g. Drama, Sci-Fi)          |
| `director`    | String   | ✅       | Director's full name                |
| `year`        | Number   | ✅       | Release year (e.g. 2010)            |
| `rating`      | Number   | ✅       | Rating from 0 to 10                 |
| `description` | String   | ✅       | Short plot description              |
| `createdAt`   | String   | Auto     | ISO timestamp (auto-generated)      |
 
---
 
## 📡 API Endpoints
 
| Method   | Endpoint              | Description              |
|----------|-----------------------|--------------------------|
| `GET`    | `/api/movies`         | Get all movies           |
| `GET`    | `/api/movies/:id`     | Get a single movie by ID |
| `POST`   | `/api/movies`         | Create a new movie       |
| `PUT`    | `/api/movies/:id`     | Update a movie by ID     |
| `DELETE` | `/api/movies/:id`     | Delete a movie by ID     |
 
---
 
## 📬 Example Requests & Responses
 
### GET /api/movies
**Response 200:**
```json
{
  "count": 3,
  "movies": [
    {
      "id": "1",
      "title": "Inception",
      "genre": "Sci-Fi",
      "director": "Christopher Nolan",
      "year": 2010,
      "rating": 8.8,
      "description": "A thief who steals corporate secrets through dream-sharing technology.",
      "createdAt": "2025-01-01T10:00:00.000Z"
    }
  ]
}
```
 
---
 
### GET /api/movies/:id
**Response 200:**
```json
{
  "id": "1",
  "title": "Inception",
  "genre": "Sci-Fi",
  "director": "Christopher Nolan",
  "year": 2010,
  "rating": 8.8,
  "description": "A thief who steals corporate secrets through dream-sharing technology.",
  "createdAt": "2025-01-01T10:00:00.000Z"
}
```
**Response 404:**
```json
{ "error": "Movie with ID \"99\" not found" }
```
 
---
 
### POST /api/movies
**Request Body:**
```json
{
  "title": "The Dark Knight",
  "genre": "Action",
  "director": "Christopher Nolan",
  "year": 2008,
  "rating": 9.0,
  "description": "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham into anarchy."
}
```
**Response 201:**
```json
{
  "id": "1712345678901",
  "title": "The Dark Knight",
  "genre": "Action",
  "director": "Christopher Nolan",
  "year": 2008,
  "rating": 9.0,
  "description": "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham into anarchy.",
  "createdAt": "2025-03-16T10:00:00.000Z"
}
```
**Response 400 (missing field):**
```json
{ "error": "All fields are required: title, genre, director, year, rating, description" }
```
 
---
 
### PUT /api/movies/:id
**Request Body (partial update supported):**
```json
{
  "rating": 9.5
}
```
**Response 200:**
```json
{
  "id": "1",
  "title": "Inception",
  "genre": "Sci-Fi",
  "director": "Christopher Nolan",
  "year": 2010,
  "rating": 9.5,
  "description": "A thief who steals corporate secrets through dream-sharing technology.",
  "createdAt": "2025-01-01T10:00:00.000Z"
}
```
 
---
 
### DELETE /api/movies/:id
**Response 200:**
```json
{
  "message": "Movie \"Inception\" deleted successfully",
  "deletedMovie": {
    "id": "1",
    "title": "Inception",
    ...
  }
}
```
 
---
 
## ⚠️ Error Responses
 
| Status | Meaning                        |
|--------|-------------------------------|
| `200`  | OK                            |
| `201`  | Resource created              |
| `400`  | Bad request / validation fail |
| `404`  | Resource not found            |
| `500`  | Internal server error         |
