//Single line comment

/*
Multi-line comment
*/

/*
<script src="script.js"></script>
*/

// Java Script Project
// April 16, 2021, CY, TW

/**
Build and modify an array
 */

//11 Most traded currencies
const deskArray = [
  "USD",
  "EUR",
  "JPY",
  "GBP",
  "AUD",
  "CAD",
  "CHF",
  "CNY",
  "HKD",
  "NZD",
  "SEK"
];
console.log("Original array:", deskArray);

// Remove the last item:
deskArray.pop();
console.log("New array:", deskArray);

// Add last item as the first item on the array:
deskArray.unshift(deskArray.pop());
console.log("Last item is now first:", deskArray);

// Sort items by alphabetical order:
deskArray.sort();
console.log("Sorted array:", deskArray);

// Find "CHF":
const foundItem = deskArray.find((item) => item === "notebook");
console.log("Found item:", foundItem);

// Find and remove an item:
let remove = "SEK";
deskArray.splice(deskArray.indexOf(remove), 1);
console.log(`Array with "${remove}" removed:`, deskArray);
