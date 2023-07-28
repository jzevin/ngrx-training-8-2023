// Import the express module
const express = require("express");
const cors = require("cors");

// Create an instance of express
const app = express();

// Use express built-in JSON parsing middleware
app.use(express.json());

// Example slide data
const slides = [...require("./slides.json")];

app.use(cors());
// Define a route for "/slides"
app.get("/slides", (req, res) => {
  // Respond with the slides data
  res.json(slides);
});

// Define the port the server should listen on
const port = process.env.PORT || 3000;

// Start the server and log the port it's listening on
app.listen(port, () =>
  console.log(`Server is listening on port http://localhost:${port}`)
);
