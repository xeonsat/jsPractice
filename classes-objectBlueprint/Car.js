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

class Car {
    constructor(
    // Define parameters:    
    name,
    bodyStyle,
    doors,
    trunk,
    color,
    priceS,
    priceD,
    priceT,
    carAvailability,
    ) {
    //Define properties:
    this.name = name;
    this.bodyStyle = bodyStyle;
    this.doors = doors;
    this.trunk = trunk;
    this.color = color;
    this.price = {
        singleMotor: priceS,
        dualmotor: priceD,
        triMotor: priceT,  
    };
    this.carAvailability = carAvailability;
    }
    // Add methods like normal functions:
    toggleAvailability = function (availableStatus) {
        this.carAvailability = availableStatus;
    }
    newPrice = function (priceSingle, priceDual, priceTri) {
        this.price.singleMotor = priceSingle;
        this.price.dualmotor = priceDual;
        this.price.triMotor = priceTri;
    }
}

export default Car;