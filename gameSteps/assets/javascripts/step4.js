// ======== ADDING The HITS COUNTER and some RANDOMNESS ===========

// =============== RESET BUTTON ======================
document.getElementById('reset').onclick = function() {

  var resets = document.getElementById('num-resets').innerHTML;
  resets++;
  document.getElementById('num-resets').innerHTML = resets;
  document.getElementById('teamone-numhits').innerHTML = 0;
  document.getElementById('teamone-numshots').innerHTML = 0;
  document.getElementById('teamtwo-numhits').innerHTML = 0;
  document.getElementById('teamtwo-numshots').innerHTML = 0;

};

// =============== TEAM 1 SHOOT BUTTON ==================
document.getElementById('teamone-shoot').onclick = function() {

    var shotCount = document.getElementById('teamone-numshots').innerHTML;

    shotCount++;

    document.getElementById('teamone-numshots').innerHTML = shotCount;

// Pull the 'teamone-numhits' COUNTER into our function
    var hitCount = document.getElementById('teamone-numhits').innerHTML;

// NOW we need to give each shot a RANDOM chance of succeeding
    var shot = parseInt(Math.random()*10)%2;

// and ONLY if that shot succeeds,
    if(shot == 1) {
// Will we then increment the COUNTER
       hitCount++;
// And return it to the DOM
      document.getElementById('teamone-numhits').innerHTML = hitCount;
    };

};

// We will write the very same function for our TEAM 2 SHOOT BUTTON, merely changing the names the relevant DOM IDs into their 'teamtwo' versions
