/*
Run this file directly with node js
come to this folder then

type 'node app1.js' and enter.
*/

console.log("Hello, Abhishek. This is Node js 101 Program.");

var person = {
  firstName : 'Abhishek',
  lastName : 'Sachdeva',
  age : 23
};

console.log("Person Object is : "+ JSON.stringify(person));

function addNumber(x,y){
  var z = x + y;
  console.log("addition of "+ x +" & "+ y +" is "+z);
}

addNumber(12,13);

var printAbhishek = function(){
  console.log("Abhishek Sachdeva");
};

printAbhishek();
console.log("To use this under setTimeOut we have to assign a function under varriable");
setTimeout(printAbhishek,5000);

console.log("\n** Handling Multiple Requests **\n");

function placeOrder(orderNumber){
  console.log("customer order : ", orderNumber);
  deliverOrder(function(){
    console.log("order ready to deliver : ", orderNumber);
  });
}

function deliverOrder(callbackFunc){
  //Means after 5000ms one can deliver the order.
  setTimeout(callbackFunc,5000);
}

placeOrder(101);
placeOrder(102);
placeOrder(103);
placeOrder(104);
placeOrder(105);
placeOrder(106);
