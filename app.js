// Require express and create an express application instance
const express = require('express');
const app = express();
const path = require('path');
var server = require('http').Server(app);

// Require the express routes defined in router.js
const routes = require('./router');

// Define the hostname and port where the server can be found
const hostname = "127.0.0.1";
const port = process.env.PUBLIC_PORT;

// Define the directory where static files are found
app.use(express.static(path.join(__dirname)));

// Specify the routes to be used for our application 
app.use(routes);

// Begin accepting connections to the specified port
app.listen(port, () => {
  // Display server location information to the console
  console.log(`Server is listening at http://${hostname}:${port}/`);
})