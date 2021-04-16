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
Build a new Object with a Constructor
----------------------------------------
Class declaration: class Name {}
Class expression:  const Name = class {}
*/

function Car(
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
    this.toggleAvailability = function (availableStatus) {
        this.carAvailability = availableStatus;
    };
    this.newPrice = function (priceSingle, priceDual, priceTri) {
        this.price.singleMotor = priceSingle;
        this.price.dualmotor = priceDual;
        this.price.triMotor = priceTri;
    };
}

const car = new Car(
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