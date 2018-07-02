const fragment = document.createDocumentFragment();
const taskManager = require("../../apiManager/habitManagerUser");
const habitManager = require("../../apiManager/habitManager");
const session = require("../../apiManager/activeUser");
const $ = require("jquery");


const homePage = function () {

    accessUser()
    // add column Button
    const columnButton = document.createElement("button");
    columnButton.type = "button"
    // Button Text
    columnButton.textContent = "Create Task"

    // Add button to DOM
    document.getElementById("mytab1").appendChild(columnButton)

    // column Button Onclick to call function createDayRow(), which will create a row of gray boxes
    columnButton.onclick = function () {

        let rows = createDayRow()
        const ul = document.getElementById("unorderedList")
        // const li=document.createElement("li");
        ul.appendChild(rows)
        // li.appendChild(rows)
        // append to div

        fragment.appendChild(columnButton)
        const homeDiv = document.getElementById("homePage");
        homeDiv.appendChild(fragment)

    };

    // const homeDiv = document.getElementById("homePage");
    // homeDiv.appendChild(fragment)
 }


// function that creates an array of days in a row in order to omit hardcoding
const createDayRow = function (task) {

    const li=document.createElement("li");

    const columnRow = document.createElement("div")

    // CREATE taskNameButton FOR TASK NAME
    const taskNameButton = document.createElement("button");
    taskNameButton.type = "button"

    taskNameButton.textContent = task?task.habitName:"Name Task"
    columnRow.appendChild(taskNameButton)
    taskNameButton.classList.add("incomplete")
    taskNameButton.onclick = function () {
    let x = prompt("Name this task:")
    // getActiveUser CREATE HABIT
    let user = (session.getActiveUser())

            let habitInfo = {
                "userId": user.id,
                "habitName": x,
                "timeStamp": new Date()
            };
            habitManager.createHabit(habitInfo);
    taskNameButton.textContent =  x
}

    // column DIV
    for (let col = 0; col < 30; col++) {
        let columnDiv = document.createElement("div")
        columnDiv.classList.add("incomplete")
        columnRow.appendChild(columnDiv)

    }

    return columnRow
}

$(document).on("click", ".incomplete", function (){
    // console.log("which btn?", $(this))
    $(this).toggleClass("complete")
})

const accessUser = function(){

    const currentUser = session.getActiveUser().id
    // console.log(currentUser)
    fetch(`http://localhost:8088/habit?userId=${currentUser}`)
    // console.log(currentUser)
    .then(r => r.json())
    .then(myJson=>{
        // console.log(myJson)
        myJson.forEach(task=>{
            console.log(task)
            let rows = createDayRow(task)
        const ul = document.getElementById("unorderedList")
        // const li=document.createElement("li");
        ul.appendChild(rows)
        })
    })

}

module.exports = homePage