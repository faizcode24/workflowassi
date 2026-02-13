
// import express from "express";
// import cors from "cors";
// import runRoutes from "./routes/run.routes.js";
// import statusRoutes from "./routes/status.routes.js";
// import historyRoutes from "./routes/history.routes.js";

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use("/api/run", runRoutes);
// app.use("/api/status", statusRoutes);
// app.use("/api/history", historyRoutes);

// export default app;

import express from "express";  
// Import Express framework

import cors from "cors";  
// Import CORS middleware (allows frontend to call backend)

import runRoutes from "./routes/run.routes.js";
import statusRoutes from "./routes/status.routes.js";
import historyRoutes from "./routes/history.routes.js";
// Import route files


const app = express();  
// Create Express app


app.use(cors());  
// Enable CORS (important when frontend & backend run on different ports)

app.use(express.json());  
// Allow server to read JSON data from request body


// Register routes
app.use("/api/run", runRoutes);      
// Handles workflow execution

app.use("/api/status", statusRoutes);  
// Handles health/status check

app.use("/api/history", historyRoutes);  
// Handles workflow history


export default app;  
// Export app to use in server.js or index.js
