class Comment {
  constructor(username, content) {
    this.username = username;
    this.content = content;
    //Criado em..
    this.createdAt = new Date();
  }
}

module.exports = Comment;
