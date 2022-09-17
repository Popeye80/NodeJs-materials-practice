const express = require('express');
const {
  addPostValidation,
  patchPostValidation,
} = require('../middlewares/validationMiddleware');
const router = new express.Router();

const {
  getPosts,
  getPostsById,
  addPost,
  changePost,
  patchPost,
  deletePost,
} = require('../controllers/postsController');

router.get('/', getPosts);
router.get('/:id', getPostsById);
router.post('/', addPostValidation, addPost);
router.put('/:id', addPostValidation, changePost);
router.patch('/:id', patchPostValidation, patchPost);
router.delete('/:id', deletePost);

module.exports = {postsRouter: router};
