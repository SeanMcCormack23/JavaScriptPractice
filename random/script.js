function randomize(min, max) {
  return Math.round(Math.random() * (max - min + 1) ) + min;
}

const tag = document.getElementById("demo1");
const button = document.getElementById("btn");

button.addEventListener("click", event => {
  //we pass in the range between which we want to draw the random number from 
  var rand = randomize(1, 100);
  tag.innerHTML = rand;
})


