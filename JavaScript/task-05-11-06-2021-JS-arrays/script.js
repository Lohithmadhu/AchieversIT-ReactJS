    // indexOf :– It is used to know the index of a particular element in an
    // Array.

    // Example:
     
     let array = [22, 23, 45, 64, 76];
     console.log(array.indexOf(23));
    
    // Output:
    // 1.
   
    // Includes: - It is used to check whether an element is included or not 
    // in the array.

    // Example:
    
    let arr = [22, 23, 45, 64, 76];
    console.log(arr.includes(23));

    // Output:
    // true.

    // Sort: - It is used to sort the elements of an array.
    // Example:
   
    let array1 = [12,32,44,55,11,33,56];
    console.log(array1.sort());

    // Output:
    // [11, 12, 32, 33, 44, 55, 56].
   
    // Push:- It is used to push an element into array. Generally it pushes the 
    // Element into last position.
    // Example:
   
   let foodItems = ["Bread", "Jam", "Butter"];

   foodItems.push("Ghee");
   console.log(foodItems);
   
    // Output:
    // ["Bread", "Jam", "Butter", "Ghee"].


    // Pop:- It is used to remove the last element of an array.

    // Example:

   let foodItems1 = ["Bread", "Jam", "Butter"];
   foodItems1.pop("Butter");
   console.log(foodItems1);

    // Output:
    // ["Bread", "Jam"].  

    // concat:
    // It is used to combine two or more arrays.

    let s1 = ['1','2','3'];
    let s2 = ['5','6','7'];
    
    console.log(s1.concat(s2));

    // Output:
    // ['1','2','3','5','6','7']


    // join:
    // It is used to join all the elements of an array into string.
    console.log(s2.join(s1));

    //Output:
    // 51,2,361,2,37

    //unshift:
    //It is used to push an element to first in an array. It also changes the length of an array.
    let s3 = ["Sai","Lohith"];
    console.log(s3.unshift("Madhu"));
    console.log(s3);

    //Output:
    //['Madhu', 'Sai', 'Lohith']

    //shift:
    //It is used to remove first element from an array.

    console.log(s3.shift()); //s3 input is taken from previous shift method.
    console.log(s3);

    // Output:
    // ['Sai', 'Lohith']

    // slice:
    // It is used to remove elements from an array.

    let s5 = ['15','25', '33', '45', '55','63','85','98'];
    console.log(s5.slice(3,7));

    // Output:
    // ['45', '55', '63', '85'];

    // splice:
    // It is used to add the elements at a particular position in an array.
    
    let s6 = ['15','25', '33', '45', '55','63','85','98'];
    console.log(s6.splice(2, 6));

    let newArray = [33,45,78,98,79,56,85,65,45];
    // finalArray = newArray.splice(2, 0, 84); // how to add a number in between
    // console.log(finalArray);

    finalArray = newArray.splice(2, 1);
    console.log(finalArray);



    
 



