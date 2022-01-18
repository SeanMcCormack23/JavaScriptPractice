var names = [
  "Sean",
  "John",
  "Dave",
  "Cian"
];
var tag1 = document.getElementById("demo1");
var tag2 = document.getElementById("demo2");var tag3 = document.getElementById("demo3");var tag4 = document.getElementById("demo4");
//we can display each value i the array with a for loop but a better way is with the toString method

for (i = 0; i< names.length; i++){
tag1.innerHTML += names[i];
}

tag2.innerHTML = names.toString();

tag3.innerHTML = names.join(" - ");

names.unshift("Deco");
tag4.innerHTML = names.join(" - ");