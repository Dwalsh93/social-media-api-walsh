const router = require('express').Router();

const {
  getAllPizza,
  getPizzaById,
  createPizza,
  updatePizza,
  deletePizza
} = require('../../controllers/user-controller');

// /api/Users
router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

// /api/pizzas/:id
router
  .route('/:id')
  .get(getPizzaById)
  .put(updatePizza)
  .delete(deletePizza);

module.exports = router;
