var tag1 = document.getElementById("demo1"); var tag2 = document.getElementById("demo2");
var tag3 = document.getElementById("demo3");
var tag4 = document.getElementById("demo4"); 
//an array is a numerical list that can be iterated through.
var person = [
  "Sean",
  28,
  "Male",
  187,
  "Irish",
  "Spanish",
  function(){
    return person[0] + " " + person[1];
  },
];
//dont forget to always use the bracket notation when utilising a function -- person[6]() --
tag1.innerHTML = person[6]();

//an object is referenced using key : value pairs.
var car = {
  make: "Ford",
  model: "Mustang",
  year: 2020,
  horsepower: 400,
  transmission: "manual",
  rearWheelDrive: true,
  drive: function(){return "drive";}
};

const carName = car.make + " " + car.model + ".";
const genInfo = "This car was manufactuered in " + car.year + ", it has " + car.horsepower + " bHp. It comes " + car.transmission + " as standard."

tag2.innerHTML = carName + genInfo + " " + car.drive();

var arrayOfPCParts = [
{
  ram: 8,
  motherboard: "asus",
  graphics: "1080",
  keyboard: "backlit",
  screen: 144
},
{
  speaker: "beats by dre",
  screen: "touchscreen",
},
{
  cpu: "intel i7",
  fans: "supaCool"
},//end of last object in the array
];//end of array

var a = arrayOfPCParts[0];
tag3.innerHTML = a.ram + "GB ram with " + a.motherboard +
" motherboard and a " + a.graphics + " card";
tag4.innerHTML = arrayOfPCParts[1].speaker + " speaker and a " + arrayOfPCParts[1].screen + " screen.";
