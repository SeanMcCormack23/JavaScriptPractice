

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
var amount = [];
added.addEventListener("click", event => {
  amount.push(1);
  var len = amount.length;
  return len;
})
