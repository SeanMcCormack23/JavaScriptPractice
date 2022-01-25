var tag = document.getElementById("demo1");

function Guitar(numStrings, type, colour, sound) {
  this.numStrings = numStrings;
  this.type = type;
  this.colour = colour;
  this.sound = sound;
};
Guitar.prototype = {
  play : function(){ return "Playing music" }
};

var guitar1 = new Guitar(6, "electric", "green", "jazzy");
var guitar2 = new Guitar(6, "acoustic", "tan", "smooth");

tag.innerHTML = guitar1.play;