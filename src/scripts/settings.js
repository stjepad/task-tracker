const fragment = document.createDocumentFragment();
const $ = require("jquery");

const settingsPage = function () {
    const logIn = document.createElement("button");
    logIn.type = "button"
    // Button Text
    logIn.textContent = "settings"

    // append to div
   fragment.appendChild(logIn)





   const settingsDiv = document.getElementById("settingsPage");
        settingsDiv.appendChild(fragment)
}
module.exports = settingsPage