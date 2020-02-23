const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let StreaksSchema = new Schema({
    date: {type: Number, required: true},
    value: {type: Number, required: true},

},
    {timestamps: true}
);

module.exports = mongoose.model('Streak', StreaksSchema);