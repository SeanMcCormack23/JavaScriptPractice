var butA = document.getElementById("addToCartA");
var butB = document.getElementById("addToCartB");

var tagA = document.getElementById("displayCartA");
var tagB = document.getElementById("displayCartB");
//using sessionstorage instead of local storage this time
var x = 1;
var y = 1;
var cartAContains = "";
var cartBContains = "";
//tried to setup a function that works for both products but the count in session storage maintained through the use of the 2 inputs, ie (couldnt get it to start from 1 on the second product)
//solution was to separate the concerns as much as possible 
//sepearte variables for each input button
butA.addEventListener("click", event => {
  
  sessionStorage.setItem("cartA", x++);
  cartAContains = sessionStorage.getItem("cartA");

  tagA.innerHTML = "Your cart contains: " + cartAContains[0];

})
butB.addEventListener("click", event => {
  sessionStorage.setItem("cartB", y++);
  cartBContains = sessionStorage.getItem("cartB");

  tagB.innerHTML = "Your cart contains: " + cartBContains[0];
})
var basket = "";
var basketItems = document.getElementById("basketContents");


function totalBasket() {
  //if we do NOT parseINT here we are goin to be returned the concatenated string as opposed to the desired additon 
basket = parseInt(cartAContains) + parseInt(cartBContains);
basketItems.innerHTML = "You have a total of " + basket + " items in your basket.";

}