const TODO = require("./../models/Todo")

exports.addTodo = async (req, res) => {
    try {
        const result = await TODO.create(req.body)

        res.json({
            message: "Add Todo Success",
            result
        })
    }
    catch (error) {
        res.json({
            message: "Something Went Wrong " + error
        })
    }
}

exports.getTodo = async (req, res) => {
    try {
        const result = await TODO.find()

        res.json({
            message: "Get Todo Success",
            result
        })
    }
    catch (error) {
        res.json({
            message: "Something Went Wrong " + error
        })
    }
}

exports.updateTodo = async (req, res) => {
    try {
        const todoId = req.params.id
        const result = await TODO.findByIdAndUpdate(todoId, req.body, { new: true })

        res.json({
            message: "Update Todo Success",
            result
        })
    }
    catch (error) {
        res.json({
            message: "Something Went Wrong " + error
        })
    }
}

exports.deleteTodo = async (req, res) => {
    try {
        const todoId = req.params.id
        const result = await TODO.findByIdAndDelete(todoId)

        res.json({
            message: "Delete Todo Success",
            result
        })
    }
    catch (error) {
        res.json({
            message: "Something Went Wrong " + error
        })
    }
}
