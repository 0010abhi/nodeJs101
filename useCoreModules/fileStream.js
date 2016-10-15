var fs = require('fs');

// will create txt file (if not present there) and over-write.
fs.writeFileSync('corn.txt', "Sweet corn is the best snack according to me.");

//To read the content of txt file.
var fileContent = fs.readFileSync('corn.txt').toString();
console.log(fileContent);
