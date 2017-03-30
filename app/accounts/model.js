var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var accountSchema = new Schema({
    username: String,
    password: String
});

mongoose.model('Account', accountSchema);