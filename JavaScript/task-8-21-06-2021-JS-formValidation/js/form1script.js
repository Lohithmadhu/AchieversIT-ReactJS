//step-1 collect the data which user has entered.
//step-2 validate the data.
//step-3 show the error if the data is not valid.

let submitButton = document.getElementById("submit");

submitButton.addEventListener('click', function (e){

    // alert('enter the collect details')
    // debugger;
    e.preventDefault();//it prevents default action of the browser.
    // console.log(e);

    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirmPassword");
    // console.log(username.id, email.id, password.id, confirmPassword.id);
    // console.log(username.value, email.value, password.value, confirmPassword.value); // to print data of which user entered.
    validateTheForm(username, email, password, confirmPassword);
});

function validateTheForm(username, email, password, confirmPassword) {

        let usernameErr = document.getElementById("usernameErr");
        let emailErr = document.getElementById("emailErr");
        let passwordErr = document.getElementById("passwordErr");
        let confirmPasswordErr = document.getElementById("confirmPasswordErr");
        // alert("Please enter the valid user name");
        if (username.value == "") {
            usernameErr.innerText = "Please enter valid a username";
            usernameErr.style.color = "red";
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
        if (password.value == "") {
            passwordErr.innerText = "Please enter password";
            passwordErr.style.color = "red";
        }
        if (password.value !== "") {
            passwordErr.innerText = "";
        }
        if (confirmPassword.value ==="" || confirmPassword.value !== password.value){
           confirmPasswordErr.innerText = "Password didnot match"; 
           confirmPasswordErr.style.color = "red";
        }
        // if (confirmPassword.value !== "") {
        //    confirmPasswordErr.innerText = "";
        // }
         else {
          let successMsg = document.getElementById("successMsg");
          successMsg.innerText = "Your data was submitted";
          successMsg.style.color = "green";
        }
}

