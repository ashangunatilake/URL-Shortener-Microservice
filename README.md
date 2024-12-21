# URL Shortener Microservice

This is a solution to the [URL Shortener Microservice](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/url-shortener-microservice) challenge from freeCodeCamp's Back End Development and APIs certification.

## Features

- Accepts a POST request to `/api/shorturl` with a URL to be shortened in the request body.
- Returns a JSON response containing the original URL and its corresponding short URL.
- Redirects users to the original URL when accessing the shortened URL.
- Stores URLs in a MongoDB database for persistence.

## Example Usage

Send a POST request to `/api/shorturl` with JSON data:
```json
{
 "url": "https://www.example.com"
}
```

Response:
```json
{
  "original_url": "https://www.example.com",
  "short_url": 1
}
```
Access the shortened URL: This redirects to https://www.example.com.
```bash
GET /api/shorturl/1
```

## How to Run Locally
1. Clone the repository:
```bash
git clone https://github.com/ashangunatilake/URL-Shortener-Microservice.git
```

2. Navigate to the project directory:
```bash
cd URL-Shortener-Microservice
```

3. Install dependencies:
```bash
npm install
```

4. Set up your environment variables:
- Create a .env file in the root directory.
- Add the following line to the .env file, replacing <your_mongo_uri> with your MongoDB Atlas connection string:
```env
MONGO_URI=<your_mongo_uri>
```

5. Start the server:
```bash
npm start
```

