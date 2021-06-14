// JS program to find whether the given element is included in an array or not.

let arr = ['apple','banana','mango','pineapple'] ;
console.log(arr.includes('pineapple'));

//JS program to write 1-100 fibonacci series.

const number = 100;
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');
console.log(n1); // print 0
console.log(n2); // print 1

nextTerm = n1 + n2;

// debugger;

while (nextTerm <= number) {

    // print the next term
    console.log(nextTerm);

    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
}

// JS program  to check two given numbers and return true if one of the number is 50 or if their sum is 50.

const num1 = 20;
const num2 = 30;
let sum = num1 + num2;
console.log('sum:' + ' ' + sum);



// JS program to convert celsius to fahrenheit

const celsius = 39;
const fahrenheit = (celsius * 1.8) + 32 // calculate fahrenheit

console.log(celsius + ' ' + 'degree celsius is equal to:' + ' ' + fahrenheit + ' ' + 'degree fahrenheit.');



// JSProgram to search particular element in a string, 
// If the element is present in the string it should return True else it should return False

let input = "AchieversIt";
console.log(input.includes('v'));


// Find first an­­­­d last positions of an element in a array
// Sample I/O
// Input let arr = [23,34,45,456,567,567];
// Output = 23,567

let array = [23,34,45,456,567,567];

let f=array[0];

let l=array[array.length-1];

console.log("First element is "+ f);
console.log("Last element is "+ l);

console.log(array[5]);










