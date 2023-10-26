# Axios API Call Wrappers

This module provides simplified wrappers around the Axios library for making API requests easier. It automatically handles the base URL, token authentication, and error handling.

## Installation

Ensure you have `axios` installed in your project:
```bash
npm install axios
```

## Configuration
Set your base ```API URL``` in the environment variable ```REACT_APP_BASE_URL```

## Usage
1. Setting the Header
The module automatically sets the authorization header with an access token from async storage if required.
```bash
import { setApiHeader } from "path-to-your-module";
await setApiHeader(withAuth);
```

2. Making API Calls
You can use the exported functions to make API calls:

POST(url, body, config, withAuth)
PATCH(url, body, withAuth)
GET(url, query, withAuth)
DELETE(url, withAuth)
withAuth is a boolean value indicating whether the request should be authenticated. It defaults to true.
Example:
```bash
import { POST, GET } from "path-to-your-module";
// Make a POST request with authentication
const response = await POST("/api/v1/posts", { title: "Hello", content: "World" });
// Make a GET request without authentication
const data = await GET("/api/v1/posts", null, false);

```
## Response and Error Handling
The wrappers return an object in the following format:
1. On successful request:
```bash
{
  data: {}, // your response data
  isError: false
}
```
2. On error:
```bash
{
  error: {}, // error response data
  isError: true
}
```
## Contributing
Feel free to fork the repository and make improvements or add more functionalities.


