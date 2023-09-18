import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes";
import blogRouter from "./routes/blog-routes";

const app = express();
app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog",blogRouter);
mongoose
    .connect(
        'mongodb+srv://petergu:peter1029@cluster0.xxrrrcs.mongodb.net/Blog?retryWrites=true&w=majority&appName=AtlasApp'
        )
        .then(()=> app.listen(5000))
        .then(()=> 
            console.log("Connected TO Database and Listening TO Localhos 5000")
            )
            .catch((err) => console.log(err));
//mongodb password:peter1029