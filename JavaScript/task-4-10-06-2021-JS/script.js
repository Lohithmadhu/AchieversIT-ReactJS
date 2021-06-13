//JS program to print even numbers from 1 - 100.
let i;
for(i = 0; i < 100; i++)
if (i %2 == 0){
    console.log(i);   
}

//JS progrom to find the given number is armstrong number or not.

// take an input
const number = 370;
let sum = 0;
let digit = number.toString().length;


// create a temporary variable
let x = number;

while (x > 0) {

    let remainder = x % 10;

    sum += remainder ** digit;

    // removing last digit from the number
    x = parseInt(x / 10); // convert float into integer
}

if (sum == number) {
    console.log(number + ' ' + 'is an Armstrong number');
}
else {
    console.log(number + ' ' + 'is not an Armstrong number');
}


// JS program to check the given number is prime number or not.

let num = 35;
if(num % 1 == 0 && num % num == 0){
    console.log(num + ' ' + 'is a prime number');
}
else{
    console.log(num + ' ' + 'is not a prime number');
}


//method-2

// JS program to check if a number is prime or not

let n = 37;
let isPrime = true;


if (n === 1) {
    console.log("1 is neither prime nor composite number.");
}


else if (n > 1) {

    
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(n + ' ' + 'is a prime number');
    } else {
        console.log(n + ' ' + 'is a not prime number');
    }
}


