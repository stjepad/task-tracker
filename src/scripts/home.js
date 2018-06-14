const fragment = document.createDocumentFragment();
const $ = require("jquery");

const homePage = function () {
    const logIn = document.createElement("button");
    logIn.type = "button"
    // Button Text
    logIn.textContent = "home"

    // append to div
   fragment.appendChild(logIn)





   const homeDiv = document.getElementById("homePage");
        homeDiv.appendChild(fragment)
}
module.exports = homePage