let posts = [];
const crypto = require("crypto");

exports.createPost = (title, content, userId) => {
  const id = crypto.randomUUID();
  const post = { id, title, content, userId };
  posts.push(post);
  return post;
};

exports.deletePost = (id) => {
  posts = posts.filter((post) => post.id !== id);
};

exports.updatePost = (id, fields) => {
  const post = posts.find((post) => post.id === id);
  if (!post) {
    throw new Error("Post not found");
  }
  post.title = fields.title ? fields.title : post.title;
  post.content = fields.content ? fields.content : post.content;
  return post;
};

exports.findPost = (id) => {
  const post = posts.find((post) => post.id === id);
  if (!post) {
    throw new Error("Post not found");
  }
  return post;
};

exports.findAll = () => {
  return posts;
};

exports.findAllByUserId = (userId) => {
  return posts.filter((post) => post.userId === userId);
};
