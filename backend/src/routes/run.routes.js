
// import express from "express";
// import runWorkflow from "../services/workflowRunner.js";
// const router = express.Router();

// router.post("/", async (req, res) => {
//   const { text, steps } = req.body;
//   if (!text) return res.status(400).json({ error: "Text required" });
//   const result = await runWorkflow(text, steps);
//   res.json(result);
// });

// export default router;

import express from "express"; 
// Import Express

import runWorkflow from "../services/workflowRunner.js"; 
// Import workflow function

const router = express.Router(); 
// Create a router


// Create POST route at "/"
router.post("/", async (req, res) => {

  const { text, steps } = req.body; 
  // Get text and steps from request body

  if (!text) 
    return res.status(400).json({ error: "Text required" });
  // If text is missing, return error

  const result = await runWorkflow(text, steps); 
  // Run workflow function

  res.json(result); 
  // Send result back to client
});


export default router; 
// Export router
