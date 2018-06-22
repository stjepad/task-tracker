const $ = require("jquery")

const habitManager = Object.create(null, {
    getAllHabits: {
        value: function () {
            return $.ajax("http://localhost:8088/habit")
        }
    },
    getSingleHabits: {
        value: function (id) {
            return $.ajax(`http://localhost:8088/habit/${id}`)
        }
    },
    createHabit: {
        value: function (habitInfo) {
            return $.ajax({
                url: "http://localhost:8088/habit",
                method: "POST",
                data: habitInfo
            })
        }
    },
    deleteHabit: {
        value: function (id) {
            return $.ajax({
                url: `http://localhost:8088/habit/${id}`,
                method: "DELETE"
            })
        }
    },
    updateHabit: {
        value: function (habitInfo) {
            return $.ajax({
                url: `http://localhost:8088/habit/${habit.id}`,
                method: "PUT",
                data: habitInfo
            })
        }
    }
})

module.exports = habitManager