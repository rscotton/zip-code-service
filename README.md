# Zip Code Service

A simple Node.js microservice for zip code looks ups. Integrates with [ZipCodeApi.com](https://www.zipcodeapi.com/).

## Installation
1. Register for a free API key at [https://www.zipcodeapi.com/Register](https://www.zipcodeapi.com/Register)
2. Create a directory named `private` in the root
3. Create a file named `zip-code-api-creds.json`, plugging in your API key using the file format below 
4. Change to the root directory in your terminal and run `npm install`
5. Start the server using `npm start`  

### Credentials file format
```javascript
{
  "public_key": "YOUR-KEY-HERE"
}
```

## Current API Routes

### Get details

Includes cite and state approximation.

`/details/<zipcode>`

### Get distance between zip codes

`/distance/<zipcode1>/<zipcode2>`