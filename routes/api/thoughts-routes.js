const router = require('express').Router();

const {
  getAllThoughts,
  getThoughtsById,
  createThought,
  updateThought,
  deleteThought
} = require('../../controllers/thoughts-controller');

// /api/thoughts
router
  .route('/')
  .get(getAllThoughts)
  .post(createThought);

// /api/thoughts/:id
router
  .route('/:id')
  .get(getThoughtsById)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;