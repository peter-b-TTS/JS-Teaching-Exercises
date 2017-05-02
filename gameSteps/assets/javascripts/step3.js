// ============== ADDING The SHOOT BUTTONS ===================


// <---------- Reset Button ----------------------->
document.getElementById('reset').onclick = function() {

  var resets = document.getElementById('num-resets').innerHTML;

  resets++;

  document.getElementById('num-resets').innerHTML = resets;
// we can now use the proper value for the counter resets
  document.getElementById('teamone-numhits').innerHTML = 0;
  document.getElementById('teamone-numshots').innerHTML = 0;
  document.getElementById('teamtwo-numhits').innerHTML = 0;
  document.getElementById('teamtwo-numshots').innerHTML = 0;

};

// TEAM 1 SHOOT BUTTON ---------------->
// First, find the 'teamone-shoot' button in the DOM and declare it as a function
document.getElementById('teamone-shoot').onclick = function() {

// Then, find the 'teamone-numshots' COUNTER and bring it inside our function
    var shotCount = document.getElementById('teamone-numshots').innerHTML;

// Increment it by one
    shotCount++;

// And return the result back to the DOM
   document.getElementById('teamone-numshots').innerHTML = shotCount;

};
