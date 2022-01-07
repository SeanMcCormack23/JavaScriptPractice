function add(x, y) {
  return x + y;
}
function subtract(x,y) {
  return x - y;
}
function mod(x,y) {
  return x % y;
}
document.getElementById("demo1").innerHTML = add(3,3);
document.getElementById("demo2").innerHTML = subtract(10,5);
document.getElementById("demo3").innerHTML = mod(7,3);
