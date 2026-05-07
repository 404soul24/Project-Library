const libraryContainer = document.querySelector("#library-container");
class Book {
  constructor(name, pages, author, genre) {
    this.name = name;
    this.pages = pages;
    this.author = author;
    this.genre = genre;
  }
  getInfo() {
    return `${this.name} by ${this.author} — ${this.pages} pages (${this.genre})`;
  }
  static addToLibrary(name, pages, author, genre) {
    const book = new Book(name, pages, author, genre);
    myLibrary.push(book);
    displayBook();
  }
}
const myLibrary = [];
function displayBook() {
  libraryContainer.innerHTML = "";

  myLibrary.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("card-body");
    bookCard.innerHTML = `<p>${book.getInfo()}</p>`;
    libraryContainer.appendChild(bookCard);
  });
}
const form = document.getElementById("addBookForm");
const btnAddBook = document.getElementById("btnAddBook");
const messageElement = document.getElementById("message");

btnAddBook.addEventListener("click", (event) => {
  event.preventDefault();
  
  const bookName = document.getElementById("book-name");
  const bookPages = document.getElementById("book-pages");
  const bookAuthor = document.getElementById("book-Author");
  const bookGenre = document.getElementById("book-Genre");
  
  messageElement.textContent = "";
  messageElement.style.color = "";
  
  // Reset custom validity messages
  bookName.setCustomValidity("");
  bookPages.setCustomValidity("");
  bookAuthor.setCustomValidity("");
  bookGenre.setCustomValidity("");
  
  // Validate individual fields
  if (!bookName.checkValidity()) {
    if (bookName.validity.valueMissing) {
      bookName.setCustomValidity("Book name is required!");
    }
  }
  
  if (!bookPages.checkValidity()) {
    if (bookPages.validity.valueMissing) {
      bookPages.setCustomValidity("Number of pages is required!");
    } else if (bookPages.validity.rangeUnderflow) {
      bookPages.setCustomValidity("Pages must be greater than 0!");
    }
  }
  
  if (!bookAuthor.checkValidity()) {
    if (bookAuthor.validity.valueMissing) {
      bookAuthor.setCustomValidity("Author name is required!");
    }
  }
  
  if (!bookGenre.checkValidity()) {
    if (bookGenre.validity.valueMissing) {
      bookGenre.setCustomValidity("Please select a genre!");
    }
  }
  
  // Check if entire form is valid using Constraint Validation API
  if (!form.checkValidity()) {
    messageElement.textContent = "Please fill in all required fields correctly!";
    messageElement.style.color = "red";
    form.reportValidity();
    return;
  }

  Book.addToLibrary(
    bookName.value,
    bookPages.value,
    bookAuthor.value,
    bookGenre.value,
  );

  messageElement.textContent = "Book added successfully!";
  messageElement.style.color = "green";

  bookName.value = "";
  bookPages.value = "";
  bookAuthor.value = "";
  bookGenre.value = "";
});
