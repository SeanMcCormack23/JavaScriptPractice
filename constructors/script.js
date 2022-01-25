function Apple(x, y, colour, score) {
  // 'this' refers to this specific object when it is called, as opposed to 'this' refering to the window object as default. 

  this.x = x;
  this.y = y;
  this.colour = colour;
  this.score = score;

}

//above we created the 'parameters' of an apple
//now we need to create an 'instance' (a copy of) as many apples as we need.
var tag1 = document.getElementById("demo1");
var tag2 = document.getElementById("demo2"); var tag3 = document.getElementById("demo3");
var tag4 = document.getElementById("demo4");
var tag5 = document.getElementById("demo5"); var tag6 = document.getElementById("demo6");

var apple1 = new Apple(20, 5, "red", 100);
var apple2 = new Apple(40, 15, "green", 100);
var apple3 = new Apple(90, 53, "purple", 400);

var appleString = apple1.x + " " + apple1.y + " " + apple1.colour + " " + apple1.score;

tag1.innerHTML = appleString;
tag2.innerHTML = "This apple is: " + apple3.colour + " and counts for " + apple3.score + " points!";


function Phone(brand, model, ram, camera) {
  this.brand = brand;
  this.model = model;
  this.ram = ram;
  this.camera = camera;
}

var iPhone = new Phone("iPhone", 13, "8GB", "4K");
var samsung = new Phone("Samsung", "S20", "8GB", "8K");
var nokia = new Phone("Nokia", "3210", "100Mb", null);


tag3.innerHTML = iPhone.brand + " " + iPhone.model;


tag4.innerHTML = iPhone.camera;
tag5.innerHTML = samsung.camera;
tag6.innerHTML = nokia.camera;