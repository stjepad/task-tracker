const fragment = document.createDocumentFragment();
const $ = require("jquery");

const statsPage = function () {
    const logIn = document.createElement("button");
    logIn.type = "button"
    // Button Text
    logIn.textContent = "stats"

    // append to div
   fragment.appendChild(logIn)





   const statsDiv = document.getElementById("statsPage");
        statsDiv.appendChild(fragment)
}
module.exports = statsPage