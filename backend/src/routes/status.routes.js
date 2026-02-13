
// import express from "express";
// const router = express.Router();

// router.get("/", (req, res) => {
//   res.json({ backend: "ok", database: "ok", llm: "mock" });
// });

// export default router;

import express from "express";  
// Import Express framework

const router = express.Router();  
// Create a new router


// Create GET route at "/"
router.get("/", (req, res) => {

  // Send a JSON response to check system status
  res.json({ 
    backend: "ok",      // Backend server is running
    database: "ok",     // Database connection status
    llm: "mock"         // LLM status (mock means fake/test mode)
  });

});

export default router;  
// Export router so it can be used in main server file
