console.log("Reference the objects ...");

var abhishek = {
  homeTown : "Rajasthan",
  sport : "Basketball"
};


var person = abhishek;
person.homeTown = "Himachal";
console.log(abhishek.homeTown);

console.log("Here on changing hometown after assigning with = original is changed.");

console.log("3 == '3' " + (3 == '3'));
console.log("3 === '3' " + (3 === '3'));

console.log("Assigning the Object");

var abhi = {
  firstName : function(){
      console.log("My Name is Abhishek.");
      console.log(this === abhi);
  }
};

abhi.firstName();

function callingGlobalFunc(){
  console.log("i am cool.");
  console.log("this === abhi " + (this === abhi));
  console.log("this === global " + (this === global));
}

callingGlobalFunc();

function user(){
  this.name = '';
  this.life = 100;
  this.giveLife = function giveLife(targetPlayer){
    targetPlayer.life += 1;
    this.life -= 1;
    console.log(this.name +" gave 1 life to "+ targetPlayer.name);
  };
}

var ab = new user();
var av = new user();

ab.name = "Abhishek";
av.name = "Avinash";

console.log('abhishek : ' + ab.life);
console.log('avinash : ' + av.life);
ab.giveLife(av);
console.log('abhishek : ' + ab.life);
console.log('avinash : ' + av.life);

console.log('\nUse of prototype');
user.prototype.crossKick = function (targetPlayer) {
  targetPlayer.life += 3;
  this.life -= 3;
  console.log( targetPlayer.name +" kicked a cross kick to "+ this.name);
};

ab.crossKick(av);
console.log('abhishek : ' + ab.life);
console.log('avinash : ' + av.life);

user.prototype.magic = 60;

console.log("abhishek's magic : "+ ab.magic);
console.log("avinash's magic : "+ av.magic);
