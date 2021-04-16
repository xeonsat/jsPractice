//Single line comment

/*
Multi-line comment
*/

/*
<script src="script.js"></script>
*/

// Java Script Project
// April 8, 16, 2021, CY, TW

/*
Create an Object
Build a Method
*/
const car = {
    name: "Tesla Cybertruck",
    bodyStyle: "pickup truck",
    doors: 4,
    trunk: true,
    color: "red",
    price: {
        singleMotor: 39900,
        dualmotor: 49900,
        triMotor: 69900,
    },
    carAvailability: true,
    //Function expression
    toggleAvailability: function (availableStatus) {
        this.carAvailability = availableStatus;
    },
    //
    newPrice: function (priceSingle, priceDual, priceTri) {
        this.price.singleMotor = priceSingle;
        this.price.dualmotor = priceDual;
        this.price.triMotor = priceTri;
    },
};

console.log("The car object:", car);
console.log("The color value:", car.color);
console.log("The highest price is:", car.price.triMotor);