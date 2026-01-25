const Todo = require('../models/Todo');
const mongoose = require('mongoose');


const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({
      user: req.user._id
    });

    res.json(todos);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const addTodo = async (req, res) => {
  try {
    const todo = await Todo.create({
      user: req.user._id,
      title: req.body.title
    });

    res.status(201).json(todo);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({
        message: 'Todo not found'
      });
    }

    if (todo.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({
        message: 'Not authorized'
      });
    }

    todo.completed = req.body.completed ?? todo.completed;
    todo.title = req.body.title ?? todo.title;

    const updatedTodo = await todo.save();
    res.json(updatedTodo);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;


    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid todo ID" });
    }

  
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

 
    if (todo.user.toString() !== req.user.id) {
      return res.status(401).json({ message: "Not authorized" });
    }

 
    await todo.deleteOne();

    res.json({ message: "Todo deleted successfully" });
  } catch (error) {
    console.error("Delete error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo
};
