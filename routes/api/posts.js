const express = require('express');
const router = express.Router();
const {
  create,
  fetchPosts,
  getPost,
  deletePost,
  updatePost,
} = require('../../controllers/api/posts');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// router.get('/check-token' , ensureLoggedIn, usersCtrl.checkToken)

// router.post('/login' ,usersCtrl.login)

router.post('/', create);
router.get('/', fetchPosts);
router.get('/:postId', getPost);
router.delete('/:postId', deletePost);
router.patch('/', updatePost);


module.exports = router;
