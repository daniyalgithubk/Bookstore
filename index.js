import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'

import bookRoute from './/Route/book.route.js'
import userRoute from './/Route/user.route.js'
const app = express()
app.use(cors());
app.use(express.json());
dotenv.config()
const PORT = process.env.PORT || 4000;
const URL = process.env.MONGO_URL;

// Connect to mongodb
try {
    mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Connected to mongodb")
} catch (error) {
    console.error("Error connecting to mongodb:", error)
}

//defining routes
app.use("/book", bookRoute)
app.use("/user", userRoute)


app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Server Page</h1>')
});

app.listen(PORT, () => {
    console.log('server is listening on port:4001')
});