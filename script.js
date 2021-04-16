//Single line comment

/*
Multi-line comment
*/

/*
<script src="script.js"></script>
*/

// Java Script Project
// April 8th 2021, CY, TW

/*
Create an object
*/

const backpack = {
    name: "My Backpack",
    volume: 30,
    color: "blue",
    pocketNum: 10,
    strapLength: {
        left: 20,
        right: 20,
    },
    lidOpen: false,
    toggleLid: function (lidStatus) {
        this.lidOpen = lidStatus;
    },
    newStrapLength: function (lengthLeft, lengthRight) {
        this.strapLength.left = lengthLeft;
        this.strapLength.right = lengthRight;
    },    
};

console.log("The backpack object:", backpack);
console.log("The pocketNum value:", backpack.pocketNum);
console.log("Strap length L:", backpack.strapLength.left);


const car = {
    name: "Tesla Cybertruck",
    bodyStyle: "pickup truck",
    doors: 4,
    trunk: true,
    color: "red",
    carRange: {
        singleMotor: 400,
        dualmotor: 480,
        triMotor: 800,
    },
    zeroOneHundred: {
        singleMotor: 6.5,
        dualmotor: 4.5,
        triMotor: 2.9,
    },
    topSpeed: {
        singleMotor: 175,
        dualmotor: 195,
        triMotor: 210,
    },
    price: {
        singleMotor: 39900,
        dualmotor: 49900,
        triMotor: 69900,
    },
    carAvailability: true,
    toggleAvailability: function (availableStatus) {
        this.carAvailability = availableStatus;
    },
    newPrice: function (priceSingle, priceDual, priceTri) {
        this.price.singleMotor = priceSingle;
        this.price.dualmotor = priceDual;
        this.price.triMotor = priceTri;
    },
};

console.log("The car object:", car);
console.log("The color value:", car.color);
console.log("The highest range is:", car.carRange.triMotor);