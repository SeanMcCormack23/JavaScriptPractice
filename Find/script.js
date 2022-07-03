const list = [
  {item: "Car", value: 1000},
  {item: "Bike", value: 1500},
  {item: "Laptop", value: 1300},
  {item: "Phone", value : 800},
  {item: "Watch", value: 20}
]
let findItem = list.find(item => {
  return item.item === "Laptop";
})
console.log(findItem);

let findOther= list.find(thing => {
  return thing.value === 800;
})
console.log(findOther);