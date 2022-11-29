export default class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  toString() {
    return { 'title:': this.title, 'author:': this.author };
  }
}