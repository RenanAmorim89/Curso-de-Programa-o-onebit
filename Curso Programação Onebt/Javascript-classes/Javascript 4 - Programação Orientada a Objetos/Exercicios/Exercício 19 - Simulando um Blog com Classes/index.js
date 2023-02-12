const Author = require("./Author");

const john = new Author("john Doe");

const post = john.writPost("Título do Post", "Lorem ipsum dolor sic...");

post.addComment("Renan Amorim", "Muito Bom!");
post.addComment("Kauã Amorim", "Gostei!!");

console.log(john);
console.log(post);
