const mongoose = require('mongoose')
const Int32 =require('mongoose-int32')

const itemSchema = new mongoose.Schema({
    name: String,
    hits: {
        type: Int32, 
        default: 0
    },
    likes: {
        type: Int32, 
        default: 0
    }
})

const itemsSchema = new mongoose.Schema({
    _id: String, 
    items: [itemSchema]
}) 

const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true 
    },
    email: String, 
    password: {
        type: String, 
        required: true, 
    }, 
    nationality: {
        type: String, 
        required: true
    }
})

// const culturee_trends = mongoose.connection.useDb("culturee_trends")

module.exports = {
    movies: mongoose.models.Movies || mongoose.model("Movies", itemsSchema, "movies"), 
    games: mongoose.models.Games || mongoose.model("Games", itemsSchema, "games"), 
    users: mongoose.models.Users || mongoose.model("Users", userSchema, "users"), 
    itemSkema: mongoose.models.ItemSkema || mongoose.model("ItemSkema", itemSchema)
}