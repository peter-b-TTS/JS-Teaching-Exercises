// ======= CHANGING the COLOR of the COUNTER =========
//
// We want the 'COUNTER' to turn red when it reaches 10, stay red  above 10, and then turn back to black when it falls below 10
//
// The Change-to-Red-Event should only happen when the COUNTER is increased, so we will put it in the function for Button 1, becase that
//
// While the Change-to-Black-Event should happen just when the COUNTER is decreased, so we put it inside the function for Button 2

// Button 1 - the INCREMENT button-----------------

  document.getElementById('increment').onclick = function()  {

      var count = document.getElementById('counter').innerHTML;

      count++;

   if(count >= 10) {
     document.getElementById('counter').style.color = "red";
   };

      document.getElementById('counter').innerHTML = count;

  };


// Button 2 - the DECREMENT button-------------

  document.getElementById('decrement').onclick = function() {

      var count = document.getElementById('counter').innerHTML;

      if(count > 0) {
         count--;
      };

      if(count < 10) {
         document.getElementById('counter').style.color = "black";
      };

      document.getElementById('counter').innerHTML = count;

  };
