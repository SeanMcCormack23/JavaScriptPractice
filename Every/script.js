const dogs = [
  {breed: "Terrier", behaviour: "friendly", numLegs: 4},
  {breed: "Labrador", behaviour: "friendly", numLegs: 4},
  {breed: "Aussie Cattle Dog", behaviour: "working", numLegs: 4},
  {breed: "Germain Shepard", behaviour: "working", numLegs: 4},
  {breed: "Cockapoo", behaviour: "toy", numLegs: 4}
]

//here we test if all the dogs in our array are working type dogs 
//this returns false as we have different behaviours, not all are the working type

var allWorkingDogs = dogs.every(dog => {
  return dog.behaviour === "working";
})
console.log(allWorkingDogs);

//compare with some(), this returns true as we have at least 1 dog with the "working" behaviour

var someWorkingDogs = dogs.some(doggie => {
  return doggie.behaviour === "working";
})
console.log(someWorkingDogs);

//all dogs have 4 legs, hopefully :/

var fourLeggedDogs = dogs.every(friend => {
  return friend.numLegs = 4;
})
console.log(fourLeggedDogs); //returns true as ALL THE DOGS HAVE 4 LEGS
