const mongoose = require('mongoose');
const Int32 = require('mongoose-int32');

const entrySchema = new mongoose.Schema({
    _id: String,
    votes: Int32
})

const pollSchema = new mongoose.Schema({
    _id: String,
    expr: Date,
    poll: [entrySchema]
});

const culturee_trends = mongoose.connection.useDb('culturee_trends');

module.exports = {
    games: culturee_trends.models.GamePoll || culturee_trends.model('GamePoll', pollSchema, "poll_games"),
movies: culturee_trends.models.MoviePoll || culturee_trends.model('MoviePoll', pollSchema, "poll_movies"),
    entryForm: culturee_trends.models.entryModel || culturee_trends.model('entryModel', entrySchema)
}

// if you were to use 2 different dbs simultaneously: 
// const poll = mongoose.connection.useDb('poll');

//     games: poll.models.GamePoll || poll.model('GamePoll', pollSchema, "poll_games"), 
//     movies: poll.models.MoviePoll || poll.model('MoviePoll', pollSchema, "poll_movies"), 
