const person = {
  name: {
    first: "Sean",
    last: "Skeng"
  },
  age: 26,
  sex: "Male",
  bio: function () {
    return (this.name.first +" "+ this.name.last+ " is a " + this.sex + " and is " + this.age);
  },
  data: function () {
    return this.name.first + " was " + this.age + ", 15 years ago.";
  }
};
var demoTag1 = document.getElementById("demo1"); 
var demoTag2 = document.getElementById("demo2"); 
var demoTag3 = document.getElementById("demo3"); 
var demoTag4 = document.getElementById("demo4");
var demoTag5 = document.getElementById("demo5");
demoTag1.innerHTML = person.age;
demoTag2.innerHTML = person.bio();
//adding another key:value pair to the object 'person'
person.eyes = "blue";
demoTag3.innerHTML = person.eyes;
demoTag4.innerHTML = person.data();
person.name.first = "Sean";
person.name.last = "Johnson";
demoTag5.innerHTML = person.name.last;
person.goodbye = function () { alert("bye") };
// person.goodbye();

const car1 = {
  model: "Ford",
  year: 2020,
  transmission: "manual",
  speed: 200
};
const car2 = {
  model: "Bmw",
  year: 2010,
  transmission: "auto",
  speed: 180
};
//create a function to see which is fastest
var fastest = function() {
  var result = car1.speed - car2.speed;
  if (result > 0) {
    return car1.model;
  }
  else {return car2.model};
}
// pin the result to the p tag in html
var fast = document.getElementById("test1");
fast.innerHTML = fastest();

var combo = car1.model + " & " + car2.model;
document.getElementById("test2").innerHTML = combo;
