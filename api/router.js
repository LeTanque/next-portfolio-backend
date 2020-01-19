import express from "express";
import posts from "./routes/posts.js";
// import authenticate from "../middleware/authentication.js";

const routes = express.Router(); // Mini app


// Endpoints
routes.use("/posts", posts); // Handles register and login
// routes.use("/auth/users", authenticate, users); // Handles register and login



module.exports = routes;