const Post = require("../models/Post");

exports.create = (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({
      error: "body requires title and content",
    });
  }
  const userId = req.user.id;

  const post = Post.createPost(title, content, userId);
  res.status(201).json(post);
};

exports.destroy = (req, res) => {
  const post = Post.findPost(req.params.id);
  console.log(post, req.user);
  if (!post) {
    return res.status(404).json({
      error: "Post not found",
    });
  }
  if (post.userId !== req.user.id && req.user.role !== "admin") {
    return res.status(403).json({
      error: "This is not your post",
    });
  }
  Post.deletePost(post.id);
  res.status(200).json({
    message: "Post obliterated",
  });
};
exports.update = (req, res) => {};
exports.findOne = (req, res) => {};
exports.findAll = (req, res) => {
  res.json(Post.findAll());
};
exports.findAllByUser = (req, res) => {};
