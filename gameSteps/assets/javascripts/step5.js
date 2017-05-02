// ================= ADDING AUDIO ===================
//
// First, we need to capture some audio for our sound effect and place it in our assets/audio folder.
//
// Next, we head to our index.html and create an <audio> element with a 'src' attribute that will point to our audio file location....
//
//   AND a unique ID that we can reference here in our JavaScript button functions.



// <=============== RESET BUTTON ===================>
document.getElementById('reset').onclick = function() {

  var resets = document.getElementById('num-resets').innerHTML;
  resets++;
  document.getElementById('num-resets').innerHTML = resets;
  document.getElementById('teamone-numhits').innerHTML = 0;
  document.getElementById('teamone-numshots').innerHTML = 0;
  document.getElementById('teamtwo-numhits').innerHTML = 0;
  document.getElementById('teamtwo-numshots').innerHTML = 0;

};

// <============= TEAM ONE SHOOT BUTTON ======================>
document.getElementById('teamone-shoot').onclick = function() {

  var shotCount = document.getElementById('teamone-numshots').innerHTML;
  shotCount++;
  document.getElementById('teamone-numshots').innerHTML = shotCount;

  var hitCount = document.getElementById('teamone-numhits').innerHTML;
  var shot = parseInt(Math.random()*10)%2;

  if(shot == 1) {
    hitCount++;
    document.getElementById('teamone-numhits').innerHTML = hitCount;
  };
// reference the audio element and bring it into our function with a variable declaration
  var soundEffect = document.getElementById('thwack');
// Then, play the 'soundEffect' with the JS 'play()' function
soundEffect.play();

};

// <=========== TEAM TWO SHOOT BUTTON ================>
document.getElementById('teamtwo-shoot').onclick = function() {

  var shotCount = document.getElementById('teamtwo-numshots').innerHTML;
  shotCount++;
  document.getElementById('teamtwo-numshots').innerHTML = shotCount;

  var hitCount = document.getElementById('teamtwo-numhits').innerHTML;
  var shot = parseInt(Math.random()*10)%2;

  if(shot == 1) {
    hitCount++;
    document.getElementById('teamtwo-numhits').innerHTML = hitCount;
  };

// Repeat audio playback statements here
var soundEffect = document.getElementById('thwack');
soundEffect.play();
  };
