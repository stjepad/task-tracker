const fragment = document.createDocumentFragment()
const $ = require("jquery");


const navBar = function () {

const home = document.createElement ("button")
home.className = "navLinks"
// home.href = "file"
home.textContent = "HOME"
fragment.appendChild(home)

const Stats = document.createElement ("button")
Stats.className = "navLinks"
// Stats.href = "file"
Stats.textContent = " STATS"
fragment.appendChild(Stats)

const logOut = document.createElement ("button")
logOut.className = "navLinks"
// logOut.href = "file"
logOut.textContent = " LOG OUT"
fragment.appendChild(logOut)

const settings = document.createElement ("button")
settings.className = "navLinks"
// settings.href = "file"
settings.textContent = " SETTINGS"
fragment.appendChild(settings)

const navBarDiv = document.getElementById("navBar");
navBarDiv.appendChild(fragment)

}

  module.exports = navBar