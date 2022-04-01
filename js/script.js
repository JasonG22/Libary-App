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
    createBook();
    return;
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

        

      
 

}
function createBook() {
    /* Creates a card to append to the Book Container
           Creates elements and text nodes to container book info
        */
       for(let prop in myLibary) {
           console.log('PROP' + myLibary[prop].title);
       }
           const bookContainer = document.getElementById('bookContainer');
           const bookCard = document.createElement('div');
           const bookHeading = document.createElement('h2');
           
           const bookHeadingTextNode = document.createTextNode(`Book: ${myLibary[0].title}`);
           bookHeading.appendChild(bookHeadingTextNode);
           bookCard.appendChild(bookHeading);
           const bookAuthor = document.createElement('p');
           const bookAuthorTextNode = document.createTextNode(`Author: ${myLibary[0].author}`);
           bookAuthor.appendChild(bookAuthorTextNode);
           bookCard.appendChild(bookAuthor);
           const bookStatus = document.createElement('p');
           
           const bookStatusTextNode = document.createTextNode(`Reading Status: ${myLibary[0].status}`);
           bookStatus.appendChild(bookStatusTextNode);
           bookCard.appendChild(bookStatus);
           bookContainer.appendChild(bookCard);
           /* Appends Card to container
              Appends Elements to card
              Appends text nodes to elements
           */
          
           

        /* 
         Create remove book button and append to bookCard
        Add ID to button to attach Event Listener to
        */
        const bookRemoveBtn = document.createElement('button');
        bookCard.appendChild(bookRemoveBtn);
        bookRemoveBtn.setAttribute('type', 'button');
        bookRemoveBtn.setAttribute('id', 'bookRemove');
        bookRemoveBtn.textContent = "Delete Book";
        bookCreated();
    
}
function bookCreated() {
    if (document.getElementById('bookRemove')){
        const parent = removeButton.parentNode; 
        removeButton.onclick = function() {
            bookContainer.remove(parent);
            return;
        }
    }
}   

  

