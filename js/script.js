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
    addBookToPage();
    function clear() {
        document.getElementById("title").value = '';
        bookAuthor = '';
        bookStatus = '';
    }
    clear();
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
console.table(myLibary);
}
let index;
function addBookToPage() {
    for(let prop in myLibary) {
    index = myLibary.length;
    const bookCard = document.createElement('div');
    bookCard.setAttribute('data-book', index);
    console.log('bookCard index' + index);
    const title = document.createElement('p');
    const titleContent = document.createTextNode(myLibary[prop].title);
    console.log("Arra test" + myLibary.indexOf(myLibary[prop].title))
    title.appendChild(titleContent);
    bookCard.appendChild(title);
    console.log(myLibary[0]);
    console.log(bookCard.hasAttribute('data-book'));
    const test = bookCard.getAttribute('data-book', index);
    console.log('Index value: + ' + index)
    if(test == index) {
        document.body.appendChild(bookCard);
    }


}   
}