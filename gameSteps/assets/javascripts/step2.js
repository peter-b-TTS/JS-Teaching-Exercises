
// =============== RESET BUTTON ====================
//
// First, find the button in the DOM and declare it as a function
  document.getElementById('reset').onclick = function() {

  // Next, bring the Reset COUNTER into our function
    var resets = document.getElementById('num-resets').innerHTML;

  // Then increment the counter
      resets++;

  // And Return it to the DOM (modified)
    document.getElementById('num-resets').innerHTML = resets;

// Now, grab the 4 shots and hits counters and set them equal to the string "zero"... This is temporary so we can see that our reset button works before adding in the other two buttons
    document.getElementById('teamone-numhits').innerHTML = "zero";
    document.getElementById('teamone-numshots').innerHTML = "zero";
    document.getElementById('teamtwo-numhits').innerHTML = "zero";
    document.getElementById('teamtwo-numshots').innerHTML = "zero";

  };
