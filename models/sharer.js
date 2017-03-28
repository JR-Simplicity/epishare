const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const Sharer = new Schema({
    name: String,
    email: String,
    phone: Number,
    password: String,
    gold: Number,
    silver: Number,
    batteryLvl: Number,
    rating: Number,
    location: {
        address: String,
        latitude: Number,
        longitude: Number
    }
});

Sharer.plugin(passportLocalMongoose);

module.exports = mongoose.model('accounts', Sharer);