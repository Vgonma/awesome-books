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

function displayCollection() {
  const bookList = document.querySelector('.book-list');
  for (let i = 0; i < collection.length; i += 1) {
    const newBook = document.createElement('article');
    newBook.innerHTML = `
    <p class="book-title">${collection[i].title}</p>
    <p class="book-author">${collection[i].author}</p>
    <button>Remove</button>
    <hr>`;
    bookList.appendChild(newBook);
  }
}

