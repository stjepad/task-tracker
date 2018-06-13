//Purpose: Manage active user in session storage


const activeUser = Object.create(null, {

    //get user from session storage
    "getActiveUser": {
        value: () =>
            //note the need below to JSON.parse the item we get from session storage.
           JSON.parse(sessionStorage.getItem("ActiveUser"))
        },
    //save user to session storage
    "saveActiveUser": {
        value: (user) => {
             //note the need below to JSON.stringify the item we get from session storage.
            sessionStorage.setItem("ActiveUser", JSON.stringify({
                    "id": user.id,
                    "firstName": user.firstName,
                    "lastName": user.lastName,
                    "email": user.email,
                    "password": user.password
                }))
        }
    },
    //remove user from session storage
    "clearActiveUser": {
        value: () => {
            sessionStorage.removeItem("ActiveUser")
        }
    }

})


module.exports = activeUser