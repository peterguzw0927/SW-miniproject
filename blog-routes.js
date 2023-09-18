import express from 'express';
import { addBlog, deleteBlog, getAllBlogs, getById, updatBlog } from '../controllers/blog-controllers';
const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.post("/add", addBlog);
blogRouter.put("/update/:id",updatBlog );
blogRouter.get("/:id",getById)
blogRouter.delete("/:id",deleteBlog)

export default blogRouter;