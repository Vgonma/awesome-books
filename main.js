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
  collection = collection.filter((book) => book.title !== removeTitle);
}

function displayCollection() {
  const bookList = document.querySelector('.book-list');
  bookList.innerHTML="";
  for (let i = 0; i < collection.length; i += 1) {
    const newBook = document.createElement('article');
    newBook.innerHTML = `
    <p class="book-title">${collection[i].title}</p>
    <p class="book-author">${collection[i].author}</p>
    <button class="remove_button">Remove</button>
    <hr>`;
    bookList.appendChild(newBook);
  }
  addRemoveEvent();
}
displayCollection();

var button= document.querySelector('.add_button');
button.addEventListener('click',(event) => {
  event.preventDefault(); 
 var title= document.querySelector('.title');
 var author= document.querySelector('.author');
 addBook(title.value,author.value);
 displayCollection();
});

function addRemoveEvent(){
  var removeButtons= document.querySelectorAll('.remove_button');
removeButtons.forEach(button => button.addEventListener('click',()=>{
  const removerTitle= button.parentElement.children[0].innerHTML;
  removeBook(removerTitle);
  console.log(removerTitle);
  displayCollection();
}))
}