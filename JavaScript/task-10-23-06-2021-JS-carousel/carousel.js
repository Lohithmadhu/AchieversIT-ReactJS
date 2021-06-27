//hoisting: it is a mechanism in JS which we can access the variables or functin sbefore declarations.
// It is only applicable for JS only.


startTheCar();

let myCarName = "tesla";

let myCarModel = " model: x";

function startTheCar(){
    console.log("car is started");
}

setTimeout(function () {
    alert("Hello world");
}, 2000);
// clearTimeout();

let i = 0;

setInterval(function myFunc() {
    
    console.log(i);
    i++;
    if(i == 10){
        // break;
        clearInterval(myFunc());
        
    }
}, 2000);

// Image Carousel
// step-1 --> collect the images
// step-2 --> store the elements in the array.
// step-3 --> we wil select particular images in DOM
// step-4 --> we wil setInterval of 2sec.

const cars = document.getElementById("cars");

let teslaCars = [
    "https://images.unsplash.com/photo-1617704548623-340376564e68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1521778992671-d99744d1a2a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    'https://images.unsplash.com/photo-1538592116845-119a3974c958?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80',
    'https://images.unsplash.com/photo-1541446654331-def41325e92c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'

];

// teslaCars[0];


let i = 0;
setInterval(function() {
    if(i<teslaCars.length){
        cars.src = teslaCars[i];
        i++;
    }
    else{
        i = 0;
    }
}, 2000);