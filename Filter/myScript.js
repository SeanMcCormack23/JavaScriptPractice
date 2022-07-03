const list = [
  {item: "Car", value: 1000},
  {item: "Bike", value: 1500},
  {item: "Laptop", value: 1300},
  {item: "Phone", value : 800},
  {item: "Watch", value: 20}
]
let filteredList = list.filter(thing=> {
  return thing.value < 900;
})

console.log(filteredList);


const videoGames = [
  {title: "Halo", bestVersion: "Halo 3"},
  {title:"Call of Duty", bestVersion: "Black Ops 2"},
  {title:"Mario Kart", bestVersion: "N64 edition"},
  {title: "Crash Team Racing", bestVersion: "PS2 Version"}
] 

let favGames = videoGames.filter(game => {
  return game.title === "Call of Duty";
})
console.log(favGames);

const restaurants = [
  {name: "McDonalds", rating: 6.0},
  {name: "Five Guys", rating: 8.2},
  {name: "KFC", rating: 2.1}
]
let mostVileRestaurant = restaurants.filter(location => {
  return parseFloat(location.rating) < 5;

})
console.log(mostVileRestaurant);