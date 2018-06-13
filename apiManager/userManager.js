const $ = require("jquery")

const userManager = Object.create(null, {

    // get all users
    getAllusers: {
        value: function () {
            return $.ajax("http://localhost:8088/user")
        }
    },
    // get single user
    getSingleusers: {
        value: function (id) {
            return $.ajax(`http://localhost:8088/user/${id}`)
        }
    },
    // post (create) user
    createusers: {
        value: function (Users) {
            return $.ajax({
                url: "http://localhost:8088/user",
                method: "POST",
                data: Users
            })
        }
    },
    // delete user
    deleteusers: {
        value: function (id) {
            return $.ajax({
                url: `http://localhost:8088/user/${id}`,
                method: "DELETE"
            })
        }
    },
    //  put (update) user
    updateusers: {
        value: function (Users) {
            return $.ajax({
                url: `http://localhost:8088/user/${Users.id}`,
                method: "PUT",
                data:Users
            })
        }
    }
})



module.exports = userManager