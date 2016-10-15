var path = require('path');

var websiteHome = 'Desktop/Abhishek//MeanApp/src/index.html';
var websiteContactUs = 'Desktop/Abhishek//MeanApp/src/contactUs.html';

console.log("Path module normalize paths according to OS");
console.log("Before :" + websiteHome);
console.log("After Normailze :" + path.normalize(websiteHome));

console.log("\nFor Path : "+websiteContactUs);
console.log("dir Name : "+path.dirname(websiteContactUs));
console.log("base Name : "+path.basename(websiteContactUs));
console.log("ext Name : "+path.extname(websiteContactUs));
