/*

1st question's solution : Create variables using let, const, and var for a user’s name (string), age (number), isAdmin (boolean), hobbies (array), and profile (object). Log each type with typeof.

let name="kunju";
const age=18;
var isAdmin=false;
const profile = {"Role" : "user", "place" : "nellore", "phno": 1234};
let hobbies=["eating","sleeping"];

console.log("Type of isAdmin:", typeof isAdmin);
document.body.innerHTML = "message from : "+name;

*/


/* 2nd Question solution : 

let str1 = "42";
let str2 = "42abc";


let num1 = Number(str1);
let num2 = parseInt(str1);
let num3 = +str1;

let num4 = Number(str2);
let num5 = parseInt(str2);
let num6 = +str2;

document.body.innerHTML =
  `<b>For "42":</b><br>` +
  `Number("42") = ${num1}, type: ${typeof num1}, isNaN: ${isNaN(num1)}, Number.isNaN: ${Number.isNaN(num1)}<br>` +
  `parseInt("42") = ${num2}, type: ${typeof num2}, isNaN: ${isNaN(num2)}, Number.isNaN: ${Number.isNaN(num2)}<br>` +
  `+"42" = ${num3}, type: ${typeof num3}, isNaN: ${isNaN(num3)}, Number.isNaN: ${Number.isNaN(num3)}<br><br>` +

  `<b>For "42abc":</b><br>` +
  `Number("42abc") = ${num4}, type: ${typeof num4}, isNaN: ${isNaN(num4)}, Number.isNaN: ${Number.isNaN(num4)}<br>` +
  `parseInt("42abc") = ${num5}, type: ${typeof num5}, isNaN: ${isNaN(num5)}, Number.isNaN: ${Number.isNaN(num5)}<br>` +
  `+"42abc" = ${num6}, type: ${typeof num6}, isNaN: ${isNaN(num6)}, Number.isNaN: ${Number.isNaN(num6)}<br>`;
*/

// document.body.innerHTML= (null == undefined);

/* 4th Question solution :

const arr=[1,2,3];
const obj={
  "kunj_id":123, "kunj_ph":3373
};
document.body.innerHTML=Array.isArray(arr) + '<br>' +
Array.isArray(obj);;

*/


/* 5th question solution :

function classify(value) {
  return Object.prototype.toString.call(value);
}
const arr=[1,2,3];
const obj={
  "kunj_id":123, "kunj_ph":3373
};
document.body.innerHTML=classify("Santhan");


*/


/*
const arr=[1,2,3];

function sum(array) {
  let sum=0;
  for (let i=0;i<array.length;i++) {
    sum+=array[i];
  }
  return sum;
}
document.body.innerHTML=sum(arr);

*/


////////    FIZZ BUZZZZ      ////////////


/* LEETCODE - FIZZBUZZZZZZZZZZZ

function fizzbuzz(n) {
  let arr=[];
  for (let i=1;i<=n;i++) {
    if (i%3==0 && i%5==0) {
      arr.push("FizzBuzz");
    }
    else if (i%3==0) {
      arr.push("Fizz");
    }
    else if (i%5==0) {
      arr.push("Buzz");
    }
    else {
      arr.push(i.toString());
    }
  }
  return arr;
}
document.body.innerHTML=fizzbuzz(15);

*/


/* 4th question solution :
function add(a,b) {
  return a+b;
}

const subtraction = function sub(b,c) {
  return b-c;
}

const division = (x,y) => x/y;

document.body.innerHTML=typeof add+ '<br>' + typeof division + '<br>' + typeof subtraction;

*/
