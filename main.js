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

function saveLocalStorage() {
  localStorage.setItem('collection', JSON.stringify(collection));
}

function loadLocalStorage() {
  if (JSON.parse(localStorage.getItem('collection'))) {
    collection = JSON.parse(localStorage.getItem('collection'));
  }
}

function addBook(newTitle, newAuthor) {
  const newBook = {
    title: newTitle,
    author: newAuthor,
  };
  collection.push(newBook);
}

function removeBook(removeTitle) {
  collection = collection.filter((book) => book.title !== removeTitle);
}

function displayCollection() {
  const bookList = document.querySelector('.book-list');
  bookList.innerHTML = '';
  for (let i = 0; i < collection.length; i += 1) {
    const newBook = document.createElement('article');
    newBook.innerHTML = `
    <p class="book-title">${collection[i].title}</p>
    <p class="book-author">${collection[i].author}</p>
    <button class="remove_button">Remove</button>
    <hr>`;
    bookList.appendChild(newBook);
  }
  saveLocalStorage();
  // Add remove event to all the bottons.
  const removeButtons = document.querySelectorAll('.remove_button');
  removeButtons.forEach((button) => button.addEventListener('click', () => {
    const removerTitle = button.parentElement.children[0].innerHTML;
    removeBook(removerTitle);
    displayCollection();
  }));
}
loadLocalStorage();
displayCollection();

const button = document.querySelector('.add_button');
button.addEventListener('click', (event) => {
  event.preventDefault();
  const title = document.querySelector('.title');
  const author = document.querySelector('.author');
  addBook(title.value, author.value);
  displayCollection();
});
