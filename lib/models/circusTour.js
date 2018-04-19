const mongoose = require('mongoose');
const { Schema } = mongoose;


const RequiredString = {
    type: String,
    required: true
};

const schema = new Schema({
    title: RequiredString, //title of the tour
    activities: [{
        'beardedLady': String,
        'swordSwallower': String,
        'fireBreather': String
    }],
    launchDate: {
        start: Date,
        default: Date.now
    },
    stops: [{
        location: {
            city: String,
            state:String,
            zip: Number
        }
    }],
    weather: [{
        //see demo and choose fields;
    }],
    attendance: {
        type:Number,
        min: 1,
    },

});



module.exports = mongoose.model('circusTour', schema);