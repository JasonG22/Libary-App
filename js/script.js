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
    
    console.log(myLibary.indexOf('test'));
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
    userBook.addedToPage = false;
    userBook.index = myLibary.length;
    
    //push book to array
    myLibary.push(userBook);
    console.table(myLibary);
}
// const tableBody = document.getElementById('bookBody');
// tableBody..addEventListener('click', function() {
//     console.log('Woo this actually worked');
// });
function removeRow(btn) {
    const row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
    const index = btn.id;
    myLibary = myLibary.filter(Book => Book.index != index);
    return
}
function toggleStatus(btn){
    let status = btn.textContent;
    if (status === 'Read') {
        btn.textContent = 'Unread';
    } else {
        btn.textContent = 'Read';
    }
}
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

        // let table = document.getElementById('bookTable');
        // let row = table.insertRow();
        // let titleCell = row.insertCell();
        // titleCell.textContent = title;
        // let authorCell = row.insertCell();
        // authorCell.textContent = author;
        // let readCell = row.insertCell();
        // readCell.textContent = status;
        // for(let prop in myLibary) {
        let table = document.getElementById('bookBody');
        
        // let titleCell = row.insertCell();
        // titleCell.textContent = title;
        // let authorCell = row.insertCell();
        // authorCell.textContent = author;
        // let readCell = row.insertCell();
        // readCell.textContent = status;
        // }
      
        for(let prop in myLibary) {
            if(!myLibary[prop].addedToPage) {
                myLibary[prop].addedToPage = true;
                let row = table.insertRow(-1);
                let titleCell = row.insertCell();
                titleCell.textContent = title;
                let authorCell = row.insertCell();
                authorCell.textContent = author;
                let readCell = row.insertCell();
                let readCellButton = document.createElement('button');
                readCellButton.textContent = status;
                readCell.appendChild(readCellButton);
                readCellButton.setAttribute('onclick', 'toggleStatus(this)');
                let removeBook = row.insertCell();
                let removeButton = document.createElement('button');
                removeBook.appendChild(removeButton);
                removeButton.textContent = `Remove Book`;
                const bookIndex = myLibary[prop].index;
                removeButton.setAttribute('id', bookIndex);
                removeButton.setAttribute('data-book', 'book-button');
                removeButton.setAttribute('onclick', 'removeRow(this)');
                
                console.table(myLibary)
                
            }
        }
     
    return;
} 
