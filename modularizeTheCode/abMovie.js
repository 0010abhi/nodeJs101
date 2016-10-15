var movies = require('./movies');
/*
Shared State of modules.
*/
// movies.favMovie = 'Iron Man';
// console.log("Abhishek Fav Movie Is : "+movies.favMovie);

/*
Object factory.
*/
var abMovies = movies();
abMovies.favMovie = 'Iron Man';
console.log("Abhishek Fav Movie Is : "+abMovies.favMovie);
