const fragment = document.createDocumentFragment();
const $ = require("jquery");
const userManager = require("../../apiManager/userManager");
const session = require("../../apiManager/activeUser");
     // Register page

const registrationPage = function () {

    // First name input
    const userFirstNameInput = document.createElement("input");
    userFirstNameInput.id = "userFirstNameID"
    userFirstNameInput.type = "text"
    // First nameplaceholder
    userFirstNameInput.placeholder = "First Name"
    // append to  div
    fragment.appendChild(userFirstNameInput)

     // Last name input
     const userLastNameInput = document.createElement("input");
     userLastNameInput.id = "userLastNameID"
     userLastNameInput.type = "text"
     // Last nameplaceholder
     userLastNameInput.placeholder = "Last Name"
     // append to  div
     fragment.appendChild(userLastNameInput)

    // e-mail input
     const userEmailInput = document.createElement("input");
     userEmailInput.id = "userEmailID"
     userEmailInput.type = "text"
     // e-mail placeholder
     userEmailInput.placeholder = "E-mail"
     // append to  div
     fragment.appendChild(userEmailInput)

     // username input
     const userPasswordInput = document.createElement("input");
     userPasswordInput.id = "userPasswordID"
     userPasswordInput.type = "text"
     // username placeholder
     userPasswordInput.placeholder = "Password"
     // append to  div
     fragment.appendChild(userPasswordInput)

     // Register Button
     const register = document.createElement("button");
     register.type = "button"
     // Button Text
     register.textContent = "Register"
    // Button onclick

    register.onclick = function () {
        userManager.getAllusers().then(allUsers => {
            // Setting flag variable to false
            let validUserInput = true;
            // Loop over all users to see if input matches an existing user
            allUsers.forEach(user => {
                if ( user.email === userEmailInput.value) {
                    validUserInput = false;
                    alert("This Email already exists. Please try again.");
                }
            })
            if (validUserInput) {
                let request = userManager.createusers({
                    "firstName": userFirstNameInput.value,
                    "lastName": userLastNameInput.value,
                    "password": userPasswordInput.value,
                    "email": userEmailInput.value
                });
                request.done(function (msg) {
                    alert("You have successfully registered. Please log in");
                    $("#registrationPage").hide();
                    $("#loginPage").show();
                    // session.saveActiveUser();
                });
            }
        })
    };
    // append to div
    fragment.appendChild(register)
     // Login Onclick

     const registerDiv = document.getElementById("registrationPage");
     registerDiv.appendChild(fragment)
    }

    module.exports = registrationPage
