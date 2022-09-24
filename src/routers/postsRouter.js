const express = require('express');
const router = new express.Router();
const {addPostValidation} = require('../middlewares/validationMiddleware');


const {asyncWrapper} = require('../helpers/apiHelpers');

const {
  getPostsController,
  getPostsByIdController,
  addPostController,
  changePostController,
  deletePostController,
} = require('../controllers/postsController');


router.get('/', asyncWrapper(getPostsController));
router.get('/:id', asyncWrapper(getPostsByIdController));
router.post('/', addPostValidation, asyncWrapper(addPostController));
router.put('/:id', addPostValidation, asyncWrapper(changePostController));
router.delete('/:id', asyncWrapper(deletePostController));

module.exports = {postsRouter: router};
