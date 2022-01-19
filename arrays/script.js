var names = [
  "Sean",
  "John",
  "Dave",
  "Cian"
];
var tag1 = document.getElementById("demo1");
var tag2 = document.getElementById("demo2");
var tag2b = document.getElementById("demo2b"); var tag3 = document.getElementById("demo3");
var tag4 = document.getElementById("demo4"); var tag5 = document.getElementById("demo5"); var tag6 = document.getElementById("demo6");
var tag7 = document.getElementById("demo7");var tag8 = document.getElementById("demo8");var tag9 = document.getElementById("demo9");var tag9b = document.getElementById("demo9b");var tag10 = document.getElementById("demo10");
var tag11 = document.getElementById("one");

//we can display each value i the array with a for loop but a better way is with the toString method

for (i = 0; i < names.length; i++) {
  tag1.innerHTML += names[i];
}

tag2.innerHTML = names.toString();

tag2b.innerHTML = names.join(" - ");

tag3.innerHTML = names.join(" - ");

names.unshift("Deco");
tag4.innerHTML = names.join(" - ");

names.pop("Jim");
tag5.innerHTML = names.toString() + "&nbsp    -The last element 'Cian' has been popped off";

names.push("Steve");
tag6.innerHTML = names.join(", ") + "&nbsp- 'Steve' has been pushed into the array"

names.splice(3,0, "Bob", "Scott");
tag7.innerHTML = names.join(", ");

names.splice(0,2);
tag8.innerHTML = names.toString();

//slice
//we need to create a variable for the new array that will be created 
//the original array is maintained

var short = names.slice(2);
tag9.innerHTML = short.join(", ");

tag9b.innerHTML = names.toString() +  " &nbsp: The original array is still intact";

//slice w/ 2 params
//starts at the 1st value, up to (but not including) the second value
var evenShorter = names.slice(1,3);
tag10.innerHTML = evenShorter.toString();

//syntax for creating an object 
const cars = [
  {type: "bmw", model: 350},
  {type: "saab", model: 790},
  {type: "merc", model: 3}
];
//how to display to contents of an object
//need to specify the values to display (type/model)
tag11.innerHTML = cars[0].type + " " + cars[0].model;