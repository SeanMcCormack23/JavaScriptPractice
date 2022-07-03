const list = [
  {item: "Car", value: 1000},
  {item: "Bike", value: 1500},
  {item: "Laptop", value: 1300},
  {item: "Phone", value : 800},
  {item: "Watch", value: 20}
]
//the some function returns a true or false value if the condition is met within the object being called upon

var doesContain = list.some(thing => {
  return (thing.value == 1000);
})
console.log(doesContain); //true as the "car" has the value of 100

var veryExpensiveItem = list.some(item => {
  return (item.value > 10000);
})
console.log(veryExpensiveItem); //false