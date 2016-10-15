/*
modules or marginals.
To implement private and public virtually.
*/
// function printSultan(){
//   console.log("Sultan.");
// }
//
// function printTubelight(){
//   console.log("Tubelight.");
// }
//
// module.exports.sultan = printSultan;
// so sultan became public and tubelight became private.

/*
more on modules.
export complete file functions if want.
*/
// module.exports = {
//   jannat : function(){
//       console.log("jannat.");
//   },
//   jannat2 : function(){
//       console.log("jannat 2.");
//   },
//   favMovie : 'Sultan'
// };

/*
Shared State of modules.
*/
// module.exports = {
//   favMovie : ''
// };

/*
Object factory. Means each one has its own custom copy.
*/
module.exports = function(){
  return {
    favMovie : ''
  };
};
