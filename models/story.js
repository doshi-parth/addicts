const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let StorySchema = new Schema({
    story: {type:String, required: true},
    lat: {type: Number, required: true},
    long: {type: Number, required: true},

},
    {timestamps: true}
);

module.exports = mongoose.model('Story', StorySchema);