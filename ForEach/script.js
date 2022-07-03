const list = [
  {item: "Car", value: 1000},
  {item: "Bike", value: 1500},
  {item: "Laptop", value: 1300},
  {item: "Phone", value : 800},
  {item: "Watch", value: 20},
  {item: "Necklace", value: "Sentimental"}
]
var display = list.forEach(thingy => {
  console.log(thingy.item);
})
console.log(display);

// let arr = [];
// var displayInNewArr = list.forEach(obj => {
//   arr.push("value: "+obj.value);
// })
// console.log(arr);

var displayValue = list.forEach(obj => {
 console.log(obj.value);
})
console.log(displayValue);
