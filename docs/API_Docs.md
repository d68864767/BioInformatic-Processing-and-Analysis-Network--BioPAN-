# BioPAN API Documentation

This document provides a detailed description of the BioPAN API endpoints.

## Base URL

All URLs referenced in the API documentation have the following base:

```
http://localhost:3000/api
```

## Data Controller

### Get All Data

- **URL:** `/data`
- **Method:** `GET`
- **Success Response:** 
  - **Code:** 200
  - **Content:** `{ data: [ ... ] }`
- **Error Response:** 
  - **Code:** 500
  - **Content:** `{ error: "Error message" }`
- **Sample Call:** 
  ```javascript
  fetch('http://localhost:3000/api/data', {
    method: 'GET',
  });
  ```

### Get Data by ID

- **URL:** `/data/:id`
- **Method:** `GET`
- **URL Params:** `id=[string]`
- **Success Response:** 
  - **Code:** 200
  - **Content:** `{ data: { ... } }`
- **Error Response:** 
  - **Code:** 404
  - **Content:** `{ error: "Data not found" }`
- **Sample Call:** 
  ```javascript
  fetch('http://localhost:3000/api/data/123', {
    method: 'GET',
  });
  ```

### Add New Data

- **URL:** `/data`
- **Method:** `POST`
- **Data Params:** `{ ... }`
- **Success Response:** 
  - **Code:** 201
  - **Content:** `{ data: { ... } }`
- **Error Response:** 
  - **Code:** 500
  - **Content:** `{ error: "Error message" }`
- **Sample Call:** 
  ```javascript
  fetch('http://localhost:3000/api/data', {
    method: 'POST',
    body: JSON.stringify(data),
  });
  ```

## Analysis Controller

### Get All Analysis Results

- **URL:** `/analysis`
- **Method:** `GET`
- **Success Response:** 
  - **Code:** 200
  - **Content:** `{ analysis: [ ... ] }`
- **Error Response:** 
  - **Code:** 500
  - **Content:** `{ error: "Error message" }`
- **Sample Call:** 
  ```javascript
  fetch('http://localhost:3000/api/analysis', {
    method: 'GET',
  });
  ```

### Get Analysis Result by ID

- **URL:** `/analysis/:id`
- **Method:** `GET`
- **URL Params:** `id=[string]`
- **Success Response:** 
  - **Code:** 200
  - **Content:** `{ analysis: { ... } }`
- **Error Response:** 
  - **Code:** 404
  - **Content:** `{ error: "Analysis not found" }`
- **Sample Call:** 
  ```javascript
  fetch('http://localhost:3000/api/analysis/123', {
    method: 'GET',
  });
  ```

### Add New Analysis Result

- **URL:** `/analysis`
- **Method:** `POST`
- **Data Params:** `{ ... }`
- **Success Response:** 
  - **Code:** 201
  - **Content:** `{ analysis: { ... } }`
- **Error Response:** 
  - **Code:** 500
  - **Content:** `{ error: "Error message" }`
- **Sample Call:** 
  ```javascript
  fetch('http://localhost:3000/api/analysis', {
    method: 'POST',
    body: JSON.stringify(analysis),
  });
  ```
