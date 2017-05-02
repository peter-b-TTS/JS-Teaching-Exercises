
// Button 1 - the INCREMENT button-----------------
//    First, find the button in the DOM and call the 'onclick' function:

   document.getElementById('increment').onclick = function()

// Now we define what happens 'onclick' inside the curly braces
  {
  //  Find the 'counter' element in the DOM and bring it inside our 'click' function so we can increase it by one, then return it back to the DOM

    var count = document.getElementById('counter').innerHTML;

    count++;

    document.getElementById('counter').innerHTML = count;
   };

 // Button 2 - the DECREMENT button-------------
 //   Same procedure as the INCREMENT button......

   document.getElementById('decrement').onclick = function() {
     var count = document.getElementById('counter').innerHTML;

  //  EXCEPT that the 'COUNTER' must not fall below zero.
  //   Which means the button should not work IF the 'COUNTER' is already at zero,

    // which is the same as saying:
    //  the button should ONLY work IF the 'COUNTER' is ABOVE zero:

        if(count > 0) {

          count--;
        };

        document.getElementById('counter').innerHTML = count;
     };
