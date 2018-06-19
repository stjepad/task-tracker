const fragment = document.createDocumentFragment();
const taskManager = require("../../apiManager/habitManager");

const $ = require("jquery");


const homePage = function () {




    // add column Button
    const columnButton = document.createElement("button");
    columnButton.type = "button"
    // Button Text
    columnButton.textContent = "Create Task"

    // Login Onclick
    columnButton.onclick = function () {
        array()
    };
    // append to div
    fragment.appendChild(columnButton)

array()

const homeDiv = document.getElementById("homePage");
homeDiv.appendChild(fragment)
}



const array = function () {

    const table = document.getElementById("mytab1");

    let task1 = []

    for (let col = 0; col < 7; col++) {
        console.log(col)
        let text = null
        if (task1[col] === true) {

            text = document.createTextNode(1)

        } else {
            text = document.createTextNode(0)

        }
        let column = document.createElement("a")
        column.href="#col"
        column.className=col
        column.appendChild(text)
        fragment.appendChild(column)
        table.appendChild(fragment)





    }
    }




module.exports = homePage