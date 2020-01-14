function myFunction(){ // Wrap in a function to not pollute the global scope

// Colors. These are the color names you can use in CSS. You could use color codes
// like #rrggbb as well.
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

var colorIndex = 0;

setInterval(function(){
  // Set the color and increment the index.
  document.getElementById("div1").style.backgroundColor = colors[colorIndex++];

  // Wrap the index if it goes past the length of the array. % is modulo.
  colorIndex %= colors.length;
  }, 1000)
}