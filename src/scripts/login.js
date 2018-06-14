const fragment = document.createDocumentFragment();
const $ = require("jquery");
const userManager = require("../../apiManager/userManager");
const session = require("../../apiManager/activeUser");
const registrationP = require("./registration")
     // login page

     $(document).ready(function () {
        $("#mainPage").hide();
        $("#statsPage").hide();
        $("#settingsPage").hide();
        $("#homePage").hide();
        $("#navBar").hide();
        $("#registrationPage").hide();
    });

const loginPage = function () {
     // e-mail input
     const userEmailInput = document.createElement("input");
     userEmailInput.id = "userEmailID"
     userEmailInput.type = "text"
     // e-mail placeholder
     userEmailInput.placeholder = "E-mail"
     // append to  div
     fragment.appendChild(userEmailInput)
     // username input
     const passwordInput = document.createElement("input");
     passwordInput.id = "userpasswordID"
     passwordInput.type = "text"
     // username placeholder
     passwordInput.placeholder = "Password"
     // append to  div
     fragment.appendChild(passwordInput)

     const rememberMeCheckBox = $("input:checkbox");



     // submit Button
     const logIn = document.createElement("button");
     logIn.type = "button"
     // Button Text
     logIn.textContent = "Log In"

     // append to div
    fragment.appendChild(logIn)
    // Login Onclick
    logIn.onclick = function () {
        // Get all users from API
        userManager.getAllusers().then(allusers => {
            // Setting flag variable to false
            let userAuthenticated = false;
            // Loop over all users to see if input matches an existing user
            allusers.forEach(user => {
                if (user.password === passwordInput.value && user.email === userEmailInput.value) {

                    // Matching user so set flag variable to true
                    userAuthenticated = true;
                    $("#loginPage").hide();
                    $("#mainPage").show();
                    $("#navBar").show();
                    // dashboard()

                    // seesionStorage.setItem("userid", user.id)
                    session.saveActiveUser(user);

                }
            })
            // Flag variable is still false if there was no match
            if (!userAuthenticated) {
                // Warn user with sweet alert
                alert("Email or Username did not match. Please try again.");
            }
        })

    };




    // Register Button
    const register = document.createElement("button");
    register.type = "button"
    // Button Text
    register.textContent = "Register"

   // Login Onclick
   register.onclick = function () {
       console.log("yayyaya")
       $("#registrationPage").show();
       $("#loginPage").hide();
    };
    fragment.appendChild(register)

        const loginDiv = document.getElementById("loginPage");
        loginDiv.appendChild(fragment)

        const registerDiv = document.getElementById("registrationPage");
     registerDiv.appendChild(fragment)
};





    module.exports = loginPage