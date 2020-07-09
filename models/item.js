const mongoose = require('mongoose'); 
const Int32 = require('mongoose-int32'); 

const itemSchema = new mongoose.Schema({
    name: String,
    hits: Int32,
    likes: Int32
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

const culturee_trends = mongoose.connection.useDb('culturee_trends');

module.exports = {
    movies: culturee_trends.models.Movies || culturee_trends.model("Movies", itemsSchema, "movies"), 
    games: culturee_trends.models.Games || culturee_trends.model("Games", itemsSchema, "games"), 
    users: culturee_trends.models.Users || culturee_trends.model("Users", userSchema, "users")
}