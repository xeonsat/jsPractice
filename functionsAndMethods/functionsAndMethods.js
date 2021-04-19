//Single line comment

/*
Multi-line comment
*/

/*
<script src="script.js"></script>
*/

// Java Script Project
// April 19, 2021, CY, TW

// Function declaration:
function doSomeMath(x, y) {
  let z = x + y;
  return z;
}

// Function expression:
const doMoreMath = function (a = 10, b = 20) {
  let c = a * b;
  return c;
};

console.log("Do some math:", doSomeMath(2, 3));
console.log("Do more math:", doMoreMath(4, 5));

// Immediately Invoked Function Expression (IIFE)
(function () {
  let x = 4;
  let y = 6;
  let z = doSomeMath(x, y);
  console.log(`The sum of x and y is: ${z}`);
})();