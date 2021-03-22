const mongoose = require('mongoose')

const Player = mongoose.model('TeamPlayers', {
    id: {
        type: Number,
        required: true,
    },
    playerName: {
        type: String,
        trim: true,
        required: true
    },
    price: {
        type: String,
        trim: true,
        required: true
    },
    isPlaying: {
        type: Boolean,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    teamId: {
        type: Number,
        required: true
    },
    photo: {
        type: String,
        trim: true,
        required: true
    },
    position: {
        type: String,
        trim: true,
        required: true
    },
})

module.exports = Player