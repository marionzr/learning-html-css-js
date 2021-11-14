function addBookIntoTBody(tBody, book) {
    // For each book, creates a new tr (row).
    let tr = tBody.insertRow();

    // For each attribute, creates a new td (cell).
    let tdBook = tr.insertCell();
    let tdAuthor = tr.insertCell();
    let tdChapters = tr.insertCell();
    let tdIsbn = tr.insertCell();
    let tdPublishedAt = tr.insertCell();

    // Then, for each attribute, fills the td with the attribute value.
    tdBook.innerText = book.title;
    tdAuthor.innerText = book.publisher.name;
    tdChapters.innerText = book.chapters.length;
    tdIsbn.innerText = book.isbn;
    tdPublishedAt.innerText = book.publishedAt;
}

function addBooksIntoTable() {
     // Gets the tbody by ID.
    let tBody = document.getElementById("books_items");
    tBody.innerHTML = "";

    let response = getBooks();
    let books = response.books;

    for (let i = 0; i < books.length; i++) {
        let book = books[i];
        addBookIntoTBody(tBody, book);
    }

    let tFoot = document.getElementById("books_items_count");
    tFoot.innerText = `${books.length}/${response.totalCount}`;
}

addBooksIntoTable();