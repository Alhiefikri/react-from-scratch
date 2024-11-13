const book = getBook(3);
// Cara lama
const title = book.title;
const author = book.author;

// Dengan destructuring
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
