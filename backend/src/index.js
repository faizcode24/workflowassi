
// import app from "./app.js";
// import dotenv from "dotenv";
// dotenv.config();
// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => console.log(`Server running on ${PORT}`));

import app from "./app.js";  
// Import the Express app from app.js

import dotenv from "dotenv";  
// Import dotenv package (used to read environment variables)

dotenv.config();  
// Load variables from .env file into process.env


// Set server port
// If PORT exists in .env → use it
// Otherwise use 4000 as default
const PORT = process.env.PORT || 4000;


// Start the server
app.listen(PORT, () => 
  console.log(`Server running on ${PORT}`)
);
// When server starts, print message in console
