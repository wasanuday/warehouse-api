# Warehouse-api


##  Description

The assignment is to implement a very basic warehouse REST API. This API should hold products, and the product should contain an identification number, a name, a price and an available stock. It should be possible to load products into the software from below json file (products.json):
```json
 {
  "products": [
    {
      "id": "f74fb16e-62b2-4af1-abed-1a0516200d1b",
      "name": "Dining Chair",
      "price": {
        "amount": 429.99,
        "currency": "SEK"
      },
      "stock": 4
    },
    {
      "id": "014571de-30fc-4ae6-8d74-2f3641790e42",
      "name": "Dinning Table",
      "price": {
        "amount": 5999.99,
        "currency": "SEK"
      },
      "stock": 6
    },
    {
      "id": "76b856b2-8c1d-4735-9119-9d74601efab2",
      "name": "table",
      "price": {
        "amount": 600,
        "currency": "SEK"
      },
      "stock": 55
    },
    {
      "id": "ab02af72-3ddf-4e8c-a5c8-62df008d6272",
      "name": "table",
      "price": {
        "amount": 600,
        "currency": "SEK"
      },
      "stock": 55
    }
  ]
}

```

The warehouse should have at least the following functionality;

* Get all products with a formatted price.
* Get a specific product with formatted price.
* Update the product stock.
* Create a product.


## How to setup and install

Used packages needed to be installed:
- typescript
- swagger-ui-express
- express-openapi-validator
- fs
- uuid

To run the API use " npm start"
Server running at http://localhost:3000/api-docs





## pros:

- The Api follows a structural pattern so that is easy to read, navigate, share and maintain the codebase.
- The code is organized into separate folders and files. that makes it easy to scale and add new features without breaking the API.
- Dependency injection is used to decouple the different parts of the code and make it easier to test and maintain.
- There is a separate folder for services with service file containing the business logic.
- The separate model file is defined in a models folder and imported into the service file.
- For meimplicity, maintainability, instead of using the main app file (index.ts), a separate Routes folder was added with a route file used to route requests to controllers

## cons:
- Error handling is needed
- .env file is needed to contain environment variables.
- The middleware file is missing - it's needed to check the JSON request body.
- Data validation should be added to schema specification.
- More error responses should be added in Swagger.
- For faster and better development, a linter should be used to keep the code uniform.
- Next iteration - unit testing, didn't do due to time limit.
- Next iteration - integrate solution with antoher data storage usch as mongodb.
