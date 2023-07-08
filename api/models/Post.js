const mysql = require('mysql');

const PostTable = `
CREATE TABLE posts (
  title VARCHAR(255) NOT NULL UNIQUE,
  desc VARCHAR(255) NOT NULL,
  photo VARCHAR(255),
  username VARCHAR(255) NOT NULL,
  categories VARCHAR(255)
);`;

module.exports = PostTable