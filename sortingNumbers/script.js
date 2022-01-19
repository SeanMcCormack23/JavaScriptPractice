var tag = document.getElementById("demo1");
var tag2 = document.getElementById("demo2");
var tag3 = document.getElementById("demo3");
var tag4 = document.getElementById("demo4");
var tag4a = document.getElementById("demo4a");


const order = [ 1, 3, 2, 6, 4, 5];
//a simple function to sort numbers in order
//if value of equation is negative a is sorted before b
//if its positive b is sorted before a

order.sort(function(a,b){return (a - b)});

tag.innerHTML = order;


const random = [99, 34, 56,22, 54, 76, 12, 2];
tag2.innerHTML = random;

//we can print the arrays contents in javascript simply by using the reference to the array
const string = ["john", "jeff", "james"];
tag3.innerHTML = string;

const fY = [5,2,4,7,9,1,6];
tag4a.innerHTML = fY;

for (let i = fY.length -1; i > 0; i--){
  let j = Math.floor(Math.random()* i)
  let k = fY[i];
  fY[i] = fY[j];
  fY[j] = k;
}
tag4.innerHTML = fY;