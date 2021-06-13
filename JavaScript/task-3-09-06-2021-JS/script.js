// JS program to find the number even or odd

let num = 10;

if (num % 2 == 0){
    console.log('the given num' + ' ' + num + ' ' + 'is an even number');
}
else{
    console.log('the given num' + ' ' + num + ' ' + 'is a odd number');
}

// JS program to find the type of data

let i = "123";
console.log(typeof(i)); // Data type is string.

let j = 12;
console.log(typeof(j)); //Data type is number.

let k = true;
console.log(typeof(k)); // Data type is boolean;

// JS program to type of person based on age.

let age = 30;

if (age < 3){
    console.log("Infant");
}
else if(age > 3 && age < 12){
    console.log("Child");
}
else if(age > 12 && age <= 19){
    console.log("Teen");
}
else if(age > 19 && age <= 40){
    console.log("Adult");
}
else{
    console.log("old");
}