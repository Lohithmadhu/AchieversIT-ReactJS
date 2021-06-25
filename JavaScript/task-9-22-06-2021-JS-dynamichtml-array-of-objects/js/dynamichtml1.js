let courses = [
   {
   	id: 1,
   	courseName: "UI Development",
   	trainer: "Mr. Murali",
   	courseFee: 20000,
   	duration: "3 Months",
    trainingMode: "Online",
   },
   {
   	id: 2,
   	courseName: "React JS",
   	trainer: "Mr. Murali",
   	courseFee: 20000,
   	duration: "3 Months",
    trainingMode: "Online",
   },
   {
   	id: 3,
   	courseName: "Vue JS",
   	trainer: "Mr. Murali",
   	courseFee: 20000,
   	duration: "3 Months",
    trainingMode: "Online",
   },
   {
   	id: 4,
   	courseName: "Angular JS",
   	trainer: "Mr. Murali",
   	courseFee: 20000,
   	duration: "3 Months",
    trainingMode: "Online",
   },
   {
   	id: 5,
   	courseName: "Mean Stack",
   	trainer: "Mr. Murali",
   	courseFee: 20000,
   	duration: "3 Months",
    trainingMode: "Online",
   },    
];

//two way sto present dynamic data using JS
//- by string
//- using DOM manipulation

// let myCourses = "My courses are" + courses + "and theier prices are" + courses.price

//string literal/template literal --> used to concatinating the strings and attributes(variables)

// let myCourses = `my courses ${courses} and their fees are ${courses.fees}`;

let finalString = `<table><thead><tr><th>id</th><th>course name</th><th>trainer</th><th>course fee</th><th>duration</th><th>training mode</th></tr></thead><tbody>`
for(let i = 0; i < courses.length; i++){
   finalString += `<tr><td>${courses[i].id}</td><td>${courses[i].courseName}</td><td>${courses[i].trainer}</td><td>${courses[i].courseFee}</td><td>${courses[i].duration}</td><td>${courses[i].trainingMode}</td>`
}

finalString += `<tbody><table>`;

let courseDetails = document.getElementById("course_details");

courseDetails.innerHTML = finalString;

// console.log(finalString);
