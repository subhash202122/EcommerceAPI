
# Ecommerce API

This is a Node.js and MongoDB API for an ecommerce platform admin to manage product inventory.

## Getting Started

These instructions will help you set up the project on your local system.

### Prerequisites

Make sure you have the following software installed on your system:

- Node.js (https://nodejs.org/)
- MongoDB (https://www.mongodb.com/try/download/community)

### Installing

1. Clone this repository to your local system.


git clone https://github.com/your-username/ecommerce-api.git


2. Navigate to the project directory.


cd ecommerce-api


3. Install the dependencies using npm.


npm install


### Setting up MongoDB

1. Make sure MongoDB is installed and running on your local system. You can start MongoDB by running the `mongod` command in your terminal.

### Running the Server

1. Start the Node.js server.


npm start


The server should now be running on http://localhost:3000.

## API Endpoints

- **POST /products/create**: Add a new product to the database.

- **GET /products**: Get a list of all products.

- **DELETE /products/:id**: Delete a product by ID.

- **POST /products/:id/update_quantity/?number=:number**: Update the quantity of a product by ID.

## Example API Requests

You can use tools like Postman to test the API. Here are some example requests:

- To add a new product:
  - Method: POST
  - URL: http://localhost:3000/products/create
  - Body: {"product": {"name": "Laptop", "quantity": 10}}

- To get all products:
  - Method: GET
  - URL: http://localhost:3000/products

- To delete a product by ID (replace `:id` with the product ID):
  - Method: DELETE
  - URL: http://localhost:3000/products/:id

- To update the quantity of a product by ID (replace `:id` with the product ID and `:number` with the quantity to update):
  - Method: POST
  - URL: http://localhost:3000/products/:id/update_quantity/?number=:number

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Please note that in the above README.md, I assumed that the MongoDB server is running locally on the default port (27017). If you have MongoDB running on a different port or remote server, you will need to update the connection string accordingly in the `index.js` file.

