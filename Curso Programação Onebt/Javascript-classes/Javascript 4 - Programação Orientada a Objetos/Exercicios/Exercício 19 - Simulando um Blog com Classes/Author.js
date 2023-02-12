const Post = require("./Post");

class Author {
  constructor(name) {
    this.name = name;
    this.posts = [];
  }

  writPost(title, bady) {
    const post = new Post(title, bady, this); // Quando passamos o "this" ele passa o objeto todo
    this.posts.push(post);
    return post;
  }
}

module.exports = Author;
