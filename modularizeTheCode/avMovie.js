var movies = require('./movies');

/*
Shared State of modules.
*/
//movies.favMovie = 'POC';
//console.log("Avinash Fav Movie Is : "+ movies.favMovie);

/*
Object factory.
*/
var avMovies = movies();
//avMovies.favMovie = 'Iron Man';
console.log("Avinash Fav Movie Is : "+avMovies.favMovie);
