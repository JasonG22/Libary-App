/* Script for the modal */

//Declare var for modal, modalBtn, modalClose, modalAddBook
const modalBtn = document.getElementById("modalBtn");
const modal = document.getElementById("modal");
const modalClose = document.getElementById("modalClose");
const modalAddBook = document.getElementById("modalAddBook");

// Event listener to open the modal on click
modalBtn.addEventListener("click", () =>  {
    modal.style.display = "flex";
    modalBtn.style.display = "none";
});
/*
The below event listener closes the modal
If ther user clicks the 'x'
*/ 
modalClose.addEventListener("click", () => {
   modal.style.display = "none";
   modalBtn.style.display = "block"; 
});

 
modalAddBook.addEventListener("click", () => {
    modal.style.display = "none";
    modalBtn.style.display = "block";
 
    const bookTitle = document.getElementById("title").value;
    const bookAuthor = document.getElementById("author").value;
    const bookStatus = document.getElementById("status").value;
    addBookToLibary(bookTitle, bookAuthor, bookStatus);
});

//Array to hold the books
let myLibary = [];

//Object Constructor for Book
function Book(title, author, status) {
    this.title = title;
    this.author = author;
    this.status = status;
}

//Function to add the book to the page
function addBookToLibary(title, author, status) {
    const book = Object.create(Book.prototype);
    book.title = title;
    book.author = author;
    book.status = status;
//push book to array
myLibary.unshift(book);
//Function to loop through array 
    for(let prop in myLibary) {
        console.log(myLibary);
        const bookContainer = document.getElementById('bookContainer');
        const bookCard = document.createElement('div');
        const bookHeading = document.createElement('h2');
        const bookHeadingTextNode = document.createTextNode(`Book: ${myLibary[0].title}`);
        const bookAuthor = document.createElement('p');
        const bookAuthorTextNode = document.createTextNode(`Author: ${myLibary[0].author}`);
        const bookStatus = document.createElement('p');
        const bookStatusTextNode = document.createTextNode(`Reading Status: ${myLibary[0].status}`);
        bookContainer.appendChild(bookCard);
        bookCard.appendChild(bookHeading);
        bookHeading.appendChild(bookHeadingTextNode);
        bookCard.appendChild(bookAuthor);
        bookAuthor.appendChild(bookAuthorTextNode);
        bookCard.appendChild(bookStatus);
        bookStatus.appendChild(bookStatusTextNode);
    }
}



