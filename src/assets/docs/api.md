# API
Interact with 3PG through HTTP requests

---

## Uses
- Bot interaction for webapp
- XP Cards
- Creating payment sessions
- OAuth2 Discord authorization

## Status Codes
Code | Description
-----|-------------
400  | Key is invalid, or an error occurred with the request
401  | Unauthorized; key not provided or authorized 
404  | Route could not be found
429  | Too many requests to the API
500  | Internal server error (rare)

## Rate Limiting
3PG API has rate limiting to limit misuse of the API.