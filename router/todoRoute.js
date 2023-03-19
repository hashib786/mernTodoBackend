const express = require("express");
const todoController = require("../controller/todoController");
const router = express.Router();

router
  .route("/")
  .get(todoController.getAllTodo)
  .post(todoController.createTodo);

router
  .route("/:id")
  .get(todoController.getItem)
  .patch(todoController.updateTodo)
  .delete(todoController.deleteTodo);

module.exports = router;
