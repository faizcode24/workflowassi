
// import express from "express";
// import fs from "fs";
// const router = express.Router();

// router.get("/", (req, res) => {
//   try {
//     const data = fs.readFileSync("src/data/runs.json");
//     res.json(JSON.parse(data));
//   } catch {
//     res.json([]);
//   }
// });

// export default router;

// Import Express framework
import express from "express";

// Import Node.js built-in File System module
// Used to read files from your system
import fs from "fs";

// Create a new Express Router instance
// Router helps us separate route logic into different files
const router = express.Router();


// Define a GET route for "/"
// If this router is mounted like: app.use("/runs", router)
// Then this endpoint becomes: GET /runs
router.get("/", (req, res) => {
  try {
    // Read the JSON file synchronously from the file system
    // "src/data/runs.json" is the path to your stored data
    // readFileSync blocks execution until file is read
    const data = fs.readFileSync("src/data/runs.json");

    // Convert the file data (Buffer/String) into JavaScript object
    // Then send it as JSON response to the client
    res.json(JSON.parse(data));

  } catch {
    // If file doesn't exist OR JSON parsing fails
    // Return an empty array instead of crashing server
    res.json([]);
  }
});

// Export this router so it can be used in index.js or app.js
export default router;
