const express = require("express")
require("dotenv").config({ path: "./.env" })
const cors = require("cors")
const mongoose = require("mongoose")
const { addTodo, getTodo, updateTodo, deleteTodo } = require("./controllers/todoController")
mongoose.connect(process.env.MONGO_URL)

const app = express()
app.use(express.json()) // front-end मधून request.body मध्ये data आणून देतो
app.use(cors())

app.post("/todo/add", addTodo)
app.get("/todo", getTodo)
app.put("/todo/:id", updateTodo)
app.put("/todo/:id", deleteTodo)

mongoose.connection.once("open", () => {
    console.log("MONGO CONNECTED")
    app.listen(5000, console.log("http://localhost:5000"))
})
