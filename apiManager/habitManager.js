//Purpose: Manage habit tracker in session storage


const taskManager = Object.create(null, {

    //get user from session storage
    "getTask": {
        value: () =>
            //note the need below to JSON.parse the item we get from session storage.
           JSON.parse(sessionStorage.getItem("TaskManager"))
        },
    //save user to session storage
    "saveTask": {
        value: (habit) => {
             //note the need below to JSON.stringify the item we get from session storage.
            sessionStorage.setItem("TaskManager", JSON.stringify({
                "id": habit.id,
                "userId": user.id,
                "habit": habit.habit,
                "habitDescription": habit.habitDescription,

                }))
        }
    },
    //remove user from session storage
    "clearTask": {
        value: () => {
            sessionStorage.removeItem("TaskManager")
        }
    }

})


module.exports = taskManager