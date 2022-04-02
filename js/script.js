/* Script for the modal */

//Declare var for modal, modalBtn, modalClose, modalAddBook
const modalBtn = document.getElementById("modalBtn");
const modal = document.getElementById("modal");
const modalClose = document.getElementById("modalClose");
const modalAddBook = document.getElementById("modalAddBook");
const bookContainer = document.getElementById('BookContainer');

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
 
    let bookTitle = document.getElementById("title").value;
    let bookAuthor = document.getElementById("author").value;
    let bookStatus = document.getElementById("status").value;
    addBookToLibary(bookTitle, bookAuthor, bookStatus);
    addBookToPage(bookTitle, bookAuthor, bookStatus);
    return;
});

//Array to hold the books
let myLibary = [];

//Object Constructor for Book
function Book(title, author, status) {
    this.title = title;
    this.author = author;
    this.status = status;
    console.log('Book constructor' + this.title + this.author + this.status)
}

//Function to add the book to the page
function addBookToLibary(title, author, status) {
    let userBook = new Book(title, author, status);
    console.log("Add book to lib" + userBook);
    
//push book to array
myLibary.push(userBook);
const index = myLibary.length;
console.log(index);
console.table(myLibary);
}
let index;
function addBookToPage(title, author, status) {
    //const title = title;
    // const bookCard = document.createElement('table');
    // const bookCardHead = document.createElement('thead');
    // const bookHeadRow = document.createElement('tr');
    // const bookCardBody = document.createElement('tbody');
    // bookCard.appendChild(bookCardHead);
    // bookCard.appendChild(bookCardBody);
    // document.getElementById('bookContainer').innerHTML = `${bookCard}`;
        // const tableRow = document.createElement('tr');
        // const tableTitle = document.createElement('td');
        // tableTitle.textContent = myLibary[prop].title;
        // tableRow.appendChild(tableTitle);
        // bookCardBody.appendChild(tableRow);
        let table = document.getElementById('bookTable');
        let row = table.insertRow();
        let titleCell = row.insertCell();
        titleCell.textContent = title;

    return;
}