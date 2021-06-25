let submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function(e){
   e.preventDefault();

   let username = document.getElementById("username");
   let email = document.getElementById("email");
   let password = document.getElementById("password");
   let confirmPassword = document.getElementById("confirmPassword");
   let genderValue = document.getElementsByName("gender");
   // console.log(genderValue);
   getGenderValue(genderValue);

   validateTheForm(username, email, password, confirmPassword);
 });

 function getGenderValue(genderValue){
    // console.log(typeof genderValue);
    // console.log(genderValue);
    for(let i = 0; i < genderValue.length; i++){
       // console.log(genderValue[i]);
       //we need to check the checked property : true || false 
       if(genderValue[i].checked === true){
         //console.log(genderValue[i].value);
       }
       else{
        alert('Please select your gender');
       }
    }
 }
 function validateTheForm(...params) {

    // console.log(params);
    let usernameErr = document.getElementById("usernameErr");
    let emailErr = document.getElementById("emailErr");
    // let genderErr = document.getElementsById("gender");
    let passwordErr = document.getElementById("passwordErr");
    let confirmPasswordErr = document.getElementById("confirmPasswordErr");

    if (username.value == ""){
        usernameErr.innerText = "Please enter a valid username";
        usernameErr.style.color= "red";
    }
    if (username.value !== ""){
        usernameErr.innerText = "";
    }
    if (email.value == "") {
        emailErr.innerText = "Please enter valid a email";
        emailErr.style.color = "red";
    }
    if (email.value !== ""){
        emailErr.innerText = "";
    }
    // if (gender.value == ""){
    //     genderErr.innerText="Please select the gender";
    // }
    if (password.value == ""){
        passwordErr.innerText = "Please enter the password";
        passwordErr.style.color = "red";
    }
    if (password.value !== ""){
        passworErr.innerText = "";
    }
    if (confirmPassword.value === "" || confirmPassword.value !== password.value){
        confirmPasswordErr.innerText = "Password didnot match";
        confirmPasswordErr.style.color = "red";
    }
    
    // if (confirmPassword.value !== "") {
    //    confirmPasswordErr.innerText = "";
    // }
    else {
        let successMsg = document.getElementById("SuccessMsg");
        successMsg.innerText = "Your data was submitted";
        successMsg.style.color = "green";
    }
}
