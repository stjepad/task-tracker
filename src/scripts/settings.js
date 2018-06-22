const fragment = document.createDocumentFragment();
const $ = require("jquery");
const userManager = require("../../apiManager/userManager");
const session = require("../../apiManager/activeUser");


const settingsPage = function () {

//access the Active User Data
const user = session.getActiveUser("ActiveUser")

// first name edit button
const firstNameButton = document.createElement("button");
firstNameButton.type = "button"
// Button Text
firstNameButton.textContent = "Edit First Name: " + user.firstName
// append to div
fragment.appendChild(firstNameButton)
firstNameButton.onclick = function () {

    let x = prompt("Change First Name")
    if (x !== user.firstName){
        let request = userManager.updateusers({
            "firstName": x,
            "lastName": user.lastName,
            "email": user.email,
            "password": user.password,
            "id":user.id
})

sessionStorage.setItem("ActiveUser", JSON.stringify(request))
firstNameButton.textContent = "Edit First Name: " + x

}}

// last name edit button
const lastNameButton = document.createElement("button");
lastNameButton.type = "button"
// Button Text
lastNameButton.textContent = "Edit Last Name: " + user.lastName
// append to div
fragment.appendChild(lastNameButton)
lastNameButton.onclick = function () {

    let y = prompt("Change Last Name")
    if (y !== user.lastName){
        let request = userManager.updateusers({
            "firstName": user.firstName,
            "lastName": y,
            "email": user.email,
            "password": user.password,
            "id":user.id
})
// sessionStorage.setItem("firstName", x)
lastNameButton.textContent = "Edit Last Name: " + y
}}

// E-mail edit button
const emailButton = document.createElement("button");
emailButton.type = "button"
// Button Text
emailButton.textContent = "Edit E-mail: " + user.email
// append to div
fragment.appendChild(emailButton)
emailButton.onclick = function () {

    let z = prompt("Change E-mail")
    if (z !== user.email){
        let request = userManager.updateusers({
            "firstName": user.firstName,
            "lastName": user.lastName,
            "email": z,
            "password": user.password,
            "id":user.id
})
// sessionStorage.setItem("firstName", x)
emailButton.textContent = "Edit E-mail Name: " + z
}}

// Password edit button
const passwordButton = document.createElement("button");
passwordButton.type = "button"
// Button Text
passwordButton.textContent = "Edit Password: " + user.password
// append to div
fragment.appendChild(passwordButton)
passwordButton.onclick = function () {

    let q = prompt("Change Password")
    if (q !== user.password){
        let request = userManager.updateusers({
            "firstName": user.firstName,
            "lastName": user.lastName,
            "email": user.lastName,
            "password": q,
            "id":user.id
})
// sessionStorage.setItem("firstName", x)
passwordButton.textContent = "Edit Password Name: " + q
}}

   const settingsDiv = document.getElementById("settingsPage");
        settingsDiv.appendChild(fragment)
}
module.exports = settingsPage