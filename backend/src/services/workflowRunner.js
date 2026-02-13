
// import fs from "fs";
// import cleanText from "./steps/cleanText.js";
// import summarize from "./steps/summarize.js";
// import extractPoints from "./steps/extractPoints.js";
// import tagCategory from "./steps/tagCategory.js";

// const stepMap = { clean: cleanText, summarize, extract: extractPoints, tag: tagCategory };

// export default async function runWorkflow(text, steps = ["clean","summarize"]) {
//   let current = text;
//   const outputs = [];

//   for (const step of steps) {
//     if (stepMap[step]) {
//       current = stepMap[step](current);
//       outputs.push({ step, output: current });
//     }
//   }

//   const run = { input: text, outputs, createdAt: new Date() };
//   saveRun(run);
//   return run;
// }

// function saveRun(run) {
//   let runs = [];
//   try { runs = JSON.parse(fs.readFileSync("src/data/runs.json")); } catch {}
//   runs.unshift(run);
//   runs = runs.slice(0,5);
//   fs.writeFileSync("src/data/runs.json", JSON.stringify(runs,null,2));
// }


import fs from "fs";  
// Import file system module (to read and write JSON file)

import cleanText from "./steps/cleanText.js";
import summarize from "./steps/summarize.js";
import extractPoints from "./steps/extractPoints.js";
import tagCategory from "./steps/tagCategory.js";
// Import all step functions


// Map step names to their functions
const stepMap = { 
  clean: cleanText, 
  summarize, 
  extract: extractPoints, 
  tag: tagCategory 
};


// Main workflow function
export default async function runWorkflow(
  text, 
  steps = ["clean", "summarize"]  // Default steps
) {

  let current = text;   // Store current processed text
  const outputs = [];   // Store results of each step

  // Run each step one by one
  for (const step of steps) {

    // Check if step exists
    if (stepMap[step]) {

      // Execute the step function
      current = stepMap[step](current);

      // Save step result
      outputs.push({ step, output: current });
    }
  }

  // Create result object
  const run = { 
    input: text,        // Original text
    outputs,            // All step outputs
    createdAt: new Date()  // Time of execution
  };

  saveRun(run);  // Save result to file

  return run;    // Return result
}


// Function to save workflow result in JSON file
function saveRun(run) {

  let runs = [];

  try {
    // Read existing runs from file
    runs = JSON.parse(
      fs.readFileSync("src/data/runs.json")
    );
  } catch {
    // If file not found, ignore error
  }

  // Add new run at the beginning
  runs.unshift(run);

  // Keep only latest 5 runs
  runs = runs.slice(0, 5);

  // Save updated runs back to file
  fs.writeFileSync(
    "src/data/runs.json",
    JSON.stringify(runs, null, 2)
  );
}
