const books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', available: 3 }, 
  { id: 2, title: '1984', author: 'George Orwell', available: 2 },
  { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', available: 1 },
  { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', available: 4 },
  { id: 5, title: 'Moby Dick', author: 'Herman Melville', available: 0 },
];
// Search Button Functionality
const searchInput = document.getElementById('search');
const searchButton = document.getElementById('search-button');
const bookList = document.getElementById('book-list');
const borrowedList = document.getElementById('borrowed-list');
// Render Books
function renderBooks(booksToRender) {
  bookList.innerHTML = '';
  booksToRender.forEach(book => {
      const bookCard = document.createElement('div');
      bookCard.className = 'book-card';
      bookCard.innerHTML = `
          <h3>${book.title}</h3>
          <p>Author: ${book.author}</p>
          <p>Available copies: <span class="available-count">${book.available}</span></p>
          <button class="borrow-button" data-id="${book.id}" ${book.available === 0 ? 'disabled' : ''}>
              Borrow
          </button>
      `;
      bookList.appendChild(bookCard);
  });
}
// Update Book Availability
function updateBookAvailability(bookId) {
  const book = books.find(b => b.id === bookId);
  if (book && book.available > 0) {
      book.available -= 1;
      renderBooks(books);
  }
}

function addBorrowedBook(book) {
  const listItem = document.createElement('li');
  listItem.textContent = `${book.title} by ${book.author}`;
  borrowedList.appendChild(listItem);
}

function handleBorrowClick(event) {
  if (event.target.classList.contains('borrow-button')) {
      const bookId = parseInt(event.target.dataset.id);
      updateBookAvailability(bookId);
      addBorrowedBook(books.find(b => b.id === bookId));
  }
}

function handleSearch() {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredBooks = books.filter(book => 
      book.title.toLowerCase().includes(searchTerm)
  );
  renderBooks(filteredBooks);
}

searchButton.addEventListener('click', handleSearch);
bookList.addEventListener('click', handleBorrowClick);

// Initial render
renderBooks(books);