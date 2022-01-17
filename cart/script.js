var added = document.getElementById("addToCart");
var cart = document.getElementById("cartText");
//click event listener to add product to cart
//using local storage (browser)
//
var x = 1;
added.addEventListener("click", event => {
//pushing a value onto cartItem array
  localStorage.setItem('cartItem', x++);
  var cartItem = localStorage.getItem("cartItem");
  cart.innerHTML = "Your cart contains: " + cartItem[cartItem.length-1];
  console.log("clik");
//only display the last value in the array
})

