"use strict";

// console.log("Hello World");
var hello;
hello = 10;
// console.log(hello);

var name = "John";

// let age = 30;

// const isMarried = true;

function sayHi(any) {
  console.log("say hi", any);
}

const sayHiAgain = (any) => {
  let hello;
  console.log("say hi Again", any);
};

// sayHi("Hello");
// sayHiAgain("Hello again");

// let str = "hello";

// console.log(str);

// str = 0;

// console.log(str);

// str = false;

// console.log(str);

let str = "hello";
let num = 3.14;
let bool = true;
let na = null;
let nope = undefined;
let nopenum = NaN;
let myArray = [str, num, bool];
let myObj = {
  str: "hello",
  num,
  bool: bool,
  array: myArray,
};

// console.log(str);
myArray.push(name);

let mySecondArray = [...myArray, name, name];

// console.log(myArray);
// console.log(mySecondArray);

// let mySecondobj = { ...myObj, test: "test" };
// mySecondobj.test = "test";
// console.log(myObj, mySecondobj);

// {
//   const { bool, num } = myObj;
//   console.log(bool, num);
// }

function doStuff({ bool, num }) {
  console.log(bool, num);
  num = num - 2;
  bool = !bool + 3;
  //   if (num > 3) {
  //     alert("Its bigger");
  //     console.log("Tjaba tjena ahallå");
  //   } else if (bool) {
  //     alert("Its true");
  //     console.log("Tjaba tjena ahallå");
  //   } else {
  //     alert("Nothing special");
  //   }
  switch (bool) {
    case true:
      alert("Handling the truth");
      break;

    case false:
      alert("I cant handle the truth");
      break;

    default:
      alert("Somethings off");
      console.log(bool);
      break;
  }
}

// doStuff(myObj);

let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

const anton = ["a", "n", "t", "o", "n"];

anton.forEach((letter) => {
  console.log(letter);
});
let newMan = anton.map((letter) => {
  return letter + " banan";
});

console.log(newMan);

newMan = anton.filter((letter) => letter === "a");

console.log(newMan);

newMan = anton.find((letter) => letter === "a");

console.log(newMan);

console.log(myObj);
doStuff.Prototype.test = "test";
console.log(doStuff);

class Test {
    constructor()
}
