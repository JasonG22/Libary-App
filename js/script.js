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

/*
Event listener for when the user clicks add book btn on modal
Defines variables based on users input
Calls the addBookToLibary func
Calls addBookToPage func
Passes variables declared from user input to funcs
*/
modalAddBook.addEventListener("click", () => {
    modal.style.display = "none";
    modalBtn.style.display = "block";
 
    let bookTitle = document.getElementById("title").value;
    let bookAuthor = document.getElementById("author").value;
    let bookStatus = document.getElementById("status").value;
    addBookToLibary(bookTitle, bookAuthor, bookStatus);
    addBookToPage(bookTitle, bookAuthor, bookStatus);

    document.getElementById("title").value = '';
    document.getElementById("author").value = '';
    document.getElementById("status").value = 'Read';

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
/*
Function to add the book to the page
Adds addedToPage name/value to obj
Adds index name/value to obj - Important
The index is used to match the Array index to the object later
*/
function addBookToLibary(title, author, status) {
    let userBook = new Book(title, author, status);
    userBook.addedToPage = false;
    userBook.index = myLibary.length;
    
    //push book to array
    myLibary.push(userBook);
}
/*
Function to remove the row from the table on user click
Gets the row of the clicked button and calls the rows
parent to remove the row
Then removed the row object from the array using the index number
which has been assigned to the remove button
*/
function removeRow(btn) {
    const row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
    const index = btn.id;
    myLibary = myLibary.filter(Book => Book.index != index);

    return;
}
/*
Simple func to loop the array and update the text
content of the read/unread button and the object status
based on the current text content of the button
*/
function toggleStatus(btn){
    let status = btn.textContent;
    const index = btn.id;
        if (status === 'Read') {
            btn.textContent = 'Unread';
            myLibary[index].status = 'Unread';

        } else if(status === 'Unread'){
            btn.textContent = 'Read';
            myLibary[index].status = 'Read';
          
        }
    return;
}
/*
Function called by modalAddBook to add the book to
the table based off of the users input to the modal
*/
function addBookToPage(title, author, status) {

    let table = document.getElementById('bookBody');
    /*
    For loop loops though the array 
    Updates addedToPage so that the loop only adds
    records which are not already in the table

    Loop created a row and cells for each value
    */
    for(let prop in myLibary) {
        if(!myLibary[prop].addedToPage) {
            myLibary[prop].addedToPage = true;
            const bookIndex = myLibary[prop].index;
            let row = table.insertRow(-1);
            let titleCell = row.insertCell();
            titleCell.textContent = title;
            let authorCell = row.insertCell();
            authorCell.textContent = author;
            /*
            Creates button which calls toggleStatus func
            Passes the button as the arg
            */
            let readCell = row.insertCell();
            let readCellButton = document.createElement('button');
            readCellButton.textContent = status;
            readCell.appendChild(readCellButton);
            readCellButton.setAttribute('id', bookIndex);
            readCellButton.setAttribute('onclick', 'toggleStatus(this)');
            /*
            Creates remove button which is used to delete the row
            BookIndex is used to assign the Book obj array index to button
            This is used in the removeRow func to be able to match the row 
            to the obj in the array, so that it can be deleted
            */
            let removeBook = row.insertCell();
            let removeButton = document.createElement('button');
            removeBook.appendChild(removeButton);
            removeButton.textContent = `Remove Book`;
            removeButton.setAttribute('id', bookIndex);
            removeButton.setAttribute('onclick', 'removeRow(this)');
        }
    }
    return;
} 