const cars = [
  {make: "Bentley", model: "Continental", quantity: 3},
  {make: "Lambo", model: "Aventador", quantity: 2},
  {make: "Ferrari", model: "LaFerrari", quantity: 1},
  {make: "Mercedes", model: "McClaren", quantity:4},
  {make: "Ford", model: "Mustang", quantity: 10}
]

let newArrOfCarMakes = cars.map(car => {
  return car.make;
})
console.log(newArrOfCarMakes);

let newArrOfCarObjects = cars.map(individualCar => {
  return individualCar.make + " " + individualCar.model
})
console.log(newArrOfCarObjects);

let amounts = cars.map(car => {
  return car.quantity;
})
console.log(amounts);