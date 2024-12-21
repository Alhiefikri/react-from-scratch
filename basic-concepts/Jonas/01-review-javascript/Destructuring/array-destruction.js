const genres = ["science fiction", "novel", "adventure"];
// Cara lama
const primaryGenre = genres[0];
const secondaryGenre = genres[1];

// Dengan destructuring
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
