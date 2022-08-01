const router = require('express').Router();
const User = require('../../models/user');
const Post = require('../../models/Post');
const { update } = require('../../models/Post');

//create post
// router.post('/:id', async (req, res) => {

// });
//create post
const create = async (req, res) => {
  const { userId, title, desc } = req.body;
  try {
    const newPost = new Post({
      user: userId,
      title,
      desc,
    });
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
};

const fetchPosts = async (req, res) => {
  try {
    const posts = await Post.find({}).populate('user');
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getPost = async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.params.postId }).populate(
      'user'
    );
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await Post.deleteOne({ _id: req.params.postId });
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};
const updatePost = async (req, res) => {
  const { postId, title, desc } = req.body;
  try {
    const updatedPost = await Post.updateOne(
      { _id: postId },
      { $set: { title, desc } }
    );
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json(err);
  }
};
//update post
// router.put('/:id', async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id);
//     if (post.username === req.body.username) {
//       try {
//         const updatedPost = await Post.findByIdAndUpdate(
//           req.params.id,
//           {
//             $set: req.body,
//           },
//           { new: true }
//         );
//         res.status(200).json(updatedPost);
//       } catch (err) {
//         res.status(500).json(err);
//       }
//     } else {
//       res.status(401).json('You can update only your post!');
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//delete post
// router.delete('/:id', async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id);
//     if (post.username === req.body.username) {
//       try {
//         await post.delete();
//         res.status(200).json('Post has been deleted');
//       } catch (err) {
//         res.status(500).json(err);
//       }
//     } else {
//       res.status(401).json('You can delete only your post!');
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//get post
// router.get('/:id', async (req, res) => {
//   try {
//     const user = await user.findById(req.param.id);
//     const { password, ...others } = user._doc;
//     res.status(200).json(post);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//get all posts
// router.get('/', async (req, res) => {
//   const username = req.query.user;
//   const categoryName = req.query.user;
//   try {
//     let posts;
//     if (username) {
//       posts = await Post.find({ username });
//     } else if (catName) {
//       posts = await Post.find({
//         categories: {
//           $in: [catName],
//         },
//       });
//     } else {
//       posts = await Post.find();
//     }

//     res.status(200).json(post);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = {
  create,
  fetchPosts,
  getPost,
  deletePost,
  updatePost
};
