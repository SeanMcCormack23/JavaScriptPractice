var cars = [{
  id: "0",
  name: "bmw",
  model: "3150i",
  year: 2017,
  topSpeed: 160
}];
var demoA = document.getElementById("demo");
var tag = document.getElementById("pTag");

demoA.addEventListener("mouseover", event => {
  // cars.push(bmw);
  pTag.innerHTML = cars[0].model;
})
demoA.addEventListener("mouseleave", event => {
  pTag.innerHTML = cars[0].topSpeed;
})

var again = document.getElementById("check");
var tag2 = document.getElementById("demo2");
cars.push({
  id: "1",
  name: "saab",
  model: "970",
  year: 2020,
  topSpeed: 178
  // details: function() {
  // return "This is a " + this.name + ", " + this.model + ". It has a top speed of " + this.topSpeed + "."
  // }
});

again.addEventListener("click", event => {
  tag2.innerHTML = cars[1].name + " " + cars[1].model;
})

cars.push({
  id: "2",
  name: "jaguar",
  model: "f-type",
  year: 2022,
  topSpeed: 220
})
//we can use this with an event listener like so, 
//or we can use "onclick" to call the function in the html
function display(){
var len = cars.length;
var tag3 = document.getElementById("demo3");
for (i = 0; i <= len; i++) {
  tag3.innerHTML += cars[i].name + " , ";
};
};

var lastBtn = document.getElementById("press");
lastBtn.addEventListener("click", event => {
  display();
})