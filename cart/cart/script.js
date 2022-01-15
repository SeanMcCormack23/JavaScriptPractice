

// added.addEventListener("click", aFunt);
// function aFunt() {
//   console.log("clicked");
// }

// added.addEventListener("click", event => {
//   console.log("yes");
// \ \ })
// var cartList = document.getElementById("list");

// function doAll(){
//   var key = "";
//   var list = "<tr><th>Item</th><th>Value</th><tr\n>";
//   var i = 0;

//   for (i = 0; i < localStorage.length-1; i++) {
//   key = localStorage.key(i);
//   list += "<tr><td>" + key + "</td>\n<td>" + localStorage.getItem(key) + "</td></tr>\ n";

//   cartList.innerHTML = list;
//   }
// }
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
//only display the last value in the array
})

