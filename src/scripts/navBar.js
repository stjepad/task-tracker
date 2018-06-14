const fragment = document.createDocumentFragment()
const $ = require("jquery");
const statsPage = require("./stats")
const userManager = require("../../apiManager/userManager");
const session = require("../../apiManager/activeUser");


const navBar = function () {

  hideAll = function(){

    $("#statsPage").hide();
    $("#settingsPage").hide();
    $("#homePage").hide();
  }


// home button
const home = document.createElement ("button")
home.className = "navLinks"
home.textContent = "HOME"
home.onclick = function () {
  hideAll()
  $("#homePage").show();
}

fragment.appendChild(home)



// stats button
const stats = document.createElement ("button")
stats.className = "navLinks"
stats.textContent = " STATS"
// stats on click to show stats info
stats.onclick = function () {
  hideAll()
  $("#statsPage").show();
}

fragment.appendChild(stats)


// log out button
const logOut = document.createElement ("button")
logOut.className = "navLinks"
logOut.textContent = " LOG OUT"
logOut.onclick = function () {
  hideAll()
  $("#navBar").hide();
  $("#loginPage").show();
  session.clearActiveUser();
}
fragment.appendChild(logOut)


// settings button
const settings = document.createElement ("button")
settings.className = "navLinks"
settings.textContent = " SETTINGS"
// stats on click to show stats info
settings.onclick = function () {
  hideAll()
  $("#settingsPage").show();
}

fragment.appendChild(settings)

const navBarDiv = document.getElementById("navBar");
navBarDiv.appendChild(fragment)

}

  module.exports = navBar