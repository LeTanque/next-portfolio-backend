import express from "express";
import posts from "./routes/posts.js";
import auth from "./routes/auth.js";
// import authenticate from "../middleware/authentication.js";

const routes = express.Router(); // Mini app


// Endpoints
routes.use("/posts", posts); // Handles register and login
routes.use("/auth", auth); // Handles register and login



module.exports = routes;