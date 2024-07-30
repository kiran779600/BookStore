import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import bookRoute from "./route/book.route.js"

const app = express()

app.use(cors());

dotenv.config();

// Main purpose .env port is not run then this port run
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Connect MongoDB

try {
  
  mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
  });
  console.log("Connected MongoDB");
 

} catch (error) {
  console.log("Error: ", error);

}

// definning routes

app.use("/book", bookRoute)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})