const TodoApp = require("../models/todoModel");

exports.getAllTodo = async (req, res, next) => {
  try {
    const todo = await TodoApp.find();
    res.status(200).json({
      status: "sucess",
      totalTodo: todo.length,
      message: todo,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.createTodo = async (req, res, next) => {
  try {
    console.log(req.body);
    const todo = await TodoApp.create({ name: req.body.name });
    res.status(200).json({
      status: "sucess",
      message: todo,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.getItem = async (req, res) => {
  try {
    const todo = await TodoApp.findById(req.params.id);
    res.status(200).send({
      staus: "sucess",
      data: todo,
    });
  } catch (err) {
    res.status(404).json({
      staus: "fail",
      message: "i did'nt find data",
    });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    await TodoApp.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send({
      staus: "sucess",
      message: "updated",
    });
  } catch (err) {
    res.status(404).json({
      staus: "fail",
      message: "i did'nt find data",
    });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    await TodoApp.findByIdAndDelete(req.params.id);
    res.status(200).send({
      staus: "sucess",
      message: "updated",
    });
  } catch (err) {
    res.status(404).json({
      staus: "fail",
      message: "i did'nt find data",
    });
  }
};
