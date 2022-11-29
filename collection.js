export default class Collection {
  constructor() {
    this.collection = [];
  }

  populateCollection(array) {
    if (!array) { return; }
    this.collection = array;
  }

  insertBook(book) {
    this.collection.push(book);
  }

  removeBook(index) {
    this.collection.splice(index, 1);
  }
}
