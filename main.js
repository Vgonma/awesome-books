import Book from './book.js';
import Collection from './collection.js';

const lib = new Collection();
lib.insertBook(new Book('Lorem Ipsum', 'Testeroo Testyy'));
lib.insertBook(new Book('Second Book', 'Testeroo Testyy'));

function saveLocalStorage() {
  localStorage.setItem('collection', JSON.stringify(lib.collection));
}

function loadLocalStorage() {
  if (JSON.parse(localStorage.getItem('collection'))) {
    lib.populateCollection(JSON.parse(localStorage.getItem('collection')));
  }
}

function displayCollection() {
  const bookList = document.querySelector('.book-list');
  bookList.innerHTML = '';
  for (let i = 0; i < lib.collection.length; i += 1) {
    const newBook = document.createElement('article');
    newBook.classList.add('book');
    newBook.innerHTML = `
    <p class="book-title">${lib.collection[i].title}</p>
    <p class="book-author">${lib.collection[i].author}</p>
    <button class="remove_button">Remove</button>
    <hr>`;
    bookList.appendChild(newBook);
  }
  saveLocalStorage();
  // Add remove event to all the bottons.
  const removeButtons = document.querySelectorAll('.remove_button');
  removeButtons.forEach((button) => button.addEventListener('click', () => {
    lib.removeBook(Array.prototype.indexOf.call(
      button.parentElement.parentElement.children, button.parentElement,
    ));
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
  if (title.value && author.value) {
    lib.insertBook(new Book(title.value, author.value));
  }
  displayCollection();
});
