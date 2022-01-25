const bicycle = {
  brand: "Trek",
  model: "Session",
  year: 2022,
  dimensions: {
    size: "Large",
    wheelDiameter: 29,
    geometry: "Agressive"
  },
  components: {
    groupset: {
      chainrings: "SRAM Red",
      cassette: "SRAM Eagle",
      chain: "SRAM Gold",
      shifters: "SRAM SLK",
      brakes: "Formula Oro 140"
    },
    handlebar: {
      bar: "880mm",
      grips: "Bontrager"
    },
    wheels: {
      hub: "Hero4",
      rim: "Halo 29x",
      spokes: "Bladed",
      tyre: "Shwable Magic Mary 2.4 TLR",
      sealant: "Mavic Xtra Quik"
    },
    suspension: {
      fork: "Fox 38",
      shock: "Fox Float 32"
    }
  },
  product: function(){return this.brand + " " + this.model},
  details: function(){return this.year + " " + this.dimensions.geometry + " " + this.dimensions.size}
};

var tag1 = document.getElementById("demo1");
var tag2 = document.getElementById("demo2");var tag3 = document.getElementById("demo3");
var tag4 = document.getElementById("demo4");

tag1.innerHTML = bicycle.components.groupset.chainrings;

tag2.innerHTML = bicycle.components.suspension.fork;

tag3.innerHTML = bicycle.product();

tag4.innerHTML = bicycle.product() +" "+ bicycle.details();