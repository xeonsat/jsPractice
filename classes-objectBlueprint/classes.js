//Single line comment

/*
Multi-line comment
*/

/*
<script src="script.js"></script>
*/

// Java Script Project
// April 16, 2021, CY, TW

/*
Create a class for the Car object type.
----------------------------------------
Class declaration: class Name {}
Class expression:  const Name = class {}
*/
import Car from "./Car.js";


const car = new Car(                        // This is a class declaration. The trend is to use a class expression.
    "Tesla Cybertruck",
    "Pickup Truck",
    4,
    true,
    "red",
    39900,
    49900,
    69900,
    true
);

console.log("The car object:", car);
console.log("The car color:", car.color);
