/* Script for the modal */

//Declare var for modal, modalBtn and modalClose
const modalBtn = document.getElementById("modalBtn");
const modal = document.getElementById("modal");
const modalClose = document.getElementById("modalClose");

// Event listener to open the modal on click
modalBtn.addEventListener("click", () =>  {
    modal.style.display = "flex";
    modalBtn.style.display = "none";
});
/*
The below two event listeners close the modal
If ther user clicks the 'x' within the modal
Or if the user clicks outside of modal content 
*/ 
modalClose.addEventListener("click", () => {
   modal.style.display = "none";
   modalBtn.style.display = "block"; 
});
modal.addEventListener("click", () => {
    modal.style.display = "none";
    modalBtn.style.display = "block"; 
 });

/*
Logic for code coming from dom
create var for addBook Button = get element by ID book
add eventListener for addBook click function
{


}

const submitBook (button) = get element by ID submitBook
add event listener for submitBook click function()
{
create vat for the following input fields
const bookTitle = get elemembt by id title
const bookAuthor = get elemnt by id author
const bookStatus = get element by id status

const book = object.create(Book);
book.title = bookTitle
book.author = bookAuthor
book.status = bookStatus
addBooktoLibary(book)
}
*/

/*
Fill out the object constructor params (title, author, status)
this.title = title
this.author = author
this.status = status

Add param to addBookToLibary (bookDetails)
*/


//Array to hold the books
let myLibary = [];

//Object Constructor for Book
function Book() {

}

//Function to add the book to the page
function addBookToLibary() {

//push book to array
}

//Function to loop through array 
for(let prop in myLibary) {
    console.table(myLibary[prop]);
    console.log(myLibary[prop]);
}
