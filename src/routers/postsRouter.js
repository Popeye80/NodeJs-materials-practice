const express = require('express');
const router = new express.Router();
const {addPostValidation} = require('../middlewares/validationMiddleware');

const modelsMiddleware = require('../middlewares/models');
const {asyncWrapper} = require('../helpers/apiHelpers');

const {
  getPosts,
  getPostsById,
  addPost,
  changePost,
  deletePost,
} = require('../controllers/postsController');

router.use(modelsMiddleware);

router.get('/', asyncWrapper(getPosts));
router.get('/:id', asyncWrapper(getPostsById));
router.post('/', addPostValidation, asyncWrapper(addPost));
router.put('/:id', addPostValidation, asyncWrapper(changePost));
router.delete('/:id', asyncWrapper(deletePost));

module.exports = {postsRouter: router};
