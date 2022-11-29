export default class Collection {
  constructor() {
    this.collection = [];
  }

  addBook(book) {
    this.collection.push(book);
  }
}
