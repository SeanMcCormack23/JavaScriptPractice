const shoppingList = [
  {item: "Desk chair", cost: 120},
  {item: "Lamp", cost: 50},
  {item: "Phone", cost: 600},
  {item: "Trainers", cost: 100},
  {item: "Fixie", cost: 400}
]
//the "currTotal" param begins at "0", as included in the end of the function 
var totalCost = shoppingList.reduce((currTotal, thingYouWant) => {
      return thingYouWant.cost + currTotal;
      //we add each iterations "cost" value to the "currTotal" and the "currTotal" remains through the next iteration

}, 0) //<-----THIS "0" HERE

console.log(totalCost);

var averageCost = shoppingList.reduce((currentTotal, item) => {
  return (item.cost + currentTotal)
},0)
console.log(averageCost / shoppingList.length);