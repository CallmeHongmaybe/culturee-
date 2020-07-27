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

module.exports = {
    games: mongoose.models.GamePoll || mongoose.model('GamePoll', pollSchema, "poll_games"),
    movies: mongoose.models.MoviePoll || mongoose.model('MoviePoll', pollSchema, "poll_movies"),
    entryForm: mongoose.models.entryModel || mongoose.model('entryModel', entrySchema)
}

// if you were to use 2 different dbs simultaneously: 
// const poll = mongoose.connection.useDb('poll');

//     games: poll.models.GamePoll || poll.model('GamePoll', pollSchema, "poll_games"), 
//     movies: poll.models.MoviePoll || poll.model('MoviePoll', pollSchema, "poll_movies"), 
