const libraryContainer = document.querySelector("#library-container");
function Book(name, pages, author, genre) {
  this.name = name;
  this.pages = pages;
  this.author = author;
  this.genre = genre;
}
const myLibrary = [];
function displayBook() {
  libraryContainer.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("card-body");
    bookCard.innerHTML = `
        <h2>Book name : ${book.name}</h2>
        <P>Book name : ${book.author}</p>
        <P>Book pages : ${book.pages} - Book genre : ${book.genre}</p>
    `;
    libraryContainer.appendChild(bookCard)
  });
}
const btnAddBook = document.getElementById("btnAddBook");
btnAddBook.addEventListener("click", () => {
  const bookName = document.getElementById("book-name");
  const bookPages = document.getElementById("book-pages");
  const bookAuthor = document.getElementById("book-Author");
  const bookGenre = document.getElementById("book-Genre");

  const newBook = new Book(bookName.value, bookPages.value, bookAuthor.value, bookGenre.value);
  myLibrary.push(newBook);

  displayBook();


  bookName.value = "";
  bookPages.value = "";
  bookAuthor.value = "";
});

