let collection = [
  {
    title: 'Lorem ipsum',
    author: 'Testeroo Testyy',
  },
  {
    title: 'Second Book',
    author: 'Testeroo Testyy',
  },
];

function addBook(newTitle, newAuthor) {
  const newBook = {
    title: newTitle,
    author: newAuthor,
  };
  collection.push(newBook);
}

function removeBook(removeTitle) {
  const updatedCollection = collection.filter((book) => book.title !== removeTitle);
  collection = updatedCollection;
}
