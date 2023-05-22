const express = require("express")
require("dotenv").config({ path: "./.env" })
const cors = require("cors")
const mongoose = require("mongoose")
const { addTodo, getTodo, updateTodo, deleteTodo } = require("./controllers/todoController")
mongoose.connect(process.env.MONGO_URL)

const app = express()
app.use(express.json()) // front-end मधून request.body मध्ये data आणून देतो
app.use(cors())
app.use(express.static("public"))

app.post("/api/todo/add", addTodo)
app.get("/api/todo", getTodo)
app.put("/api/todo/:id", updateTodo)
app.put("/api/todo/:id", deleteTodo)

mongoose.connection.once("open", () => {
    console.log("MONGO CONNECTED")
    app.listen(5000, console.log("http://localhost:5000"))
})
