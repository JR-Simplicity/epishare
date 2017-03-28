const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const Account = new Schema({
    name: String,
    email: String,
    phone: Number,
    password: String,
    password2: String
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('accounts', Account);