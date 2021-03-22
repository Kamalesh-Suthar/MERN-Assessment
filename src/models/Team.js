const mongoose = require('mongoose')

const Team = mongoose.model('TeamNames', {
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        trim: true,
        required: true
    },
    short: {
        type: String,
        trim: true,
        required: true
    },
    image: {
        type: String,
        trim: true,
        required: true
    },
    founded: {
        type: Number,
        required: true
    },
    founder: {
        type: String,
        trim: true,
        required: true
    },
    topBatsman: {
        type: String,
        trim: true,
        required: true
    },
    topBowler: {
        type: String,
        trim: true,
        required: true
    }

})

module.exports = Team