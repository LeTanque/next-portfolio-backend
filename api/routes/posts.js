import express from "express";
import db from "../../connection.js";
import { errorObject,errorBackup } from "../../middleware/errorHandling";

const posts = express.Router();


// Get all posts
posts.get('/', async (req, res) => {
    try {
        const allPosts = await db('posts');
        if(allPosts.length === 0) {
            return res.status(200).json({ message:"No posts found" });
        }
        res.status(200).json(allPosts);
    } 
    catch (error) {
        res.status(500).json({ message: "posts could not be retrieved.", error:error });
    }
});

posts.post("/", async (req, res) => {
    if (!req.body.title || !req.body.body) return res.status(400).json({ message: "Please include an id" })
    try {
        const post = await db("posts")
        .returning([ "id" ])
        .insert(req.body);
        return res.status(200).json({ message:"Post created", post }); 
    } catch (error) {
        const message = errorObject[error.errno] || errorBackup;
        res.status(500).json({ message, error });
    }
})


export default posts;
