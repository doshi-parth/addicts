const Stories = require('../models/story');
const mongoose = require('../connection');

exports.addstory = (req, res) => {
    req.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    let stories = new Stories(
        {
            story: req.body.story,
            lat: req.body.lat,
            long: req.body.long
        }
    );

    stories.save(function (err) {
        if (err) {
            res.send({"status": "Fail", "error": err});
        }
        else{
        res.send({"status": "Success"});
        }
    })  
}

exports.getstories = (req, res) => {
    req.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    let stories = mongoose.model('Story');
    stories.find({}, (err, data) => {
        if(err){
            // console.log(err);
            res.send({"status": "Fail", "err": "DB error"});
            return err;
          }
        if (data.length != 0){
            res.send({"status":"success", "data": data});
        }
        else{
            res.send({"status": "Fail", "err": "No records"});
        }
    })
}
