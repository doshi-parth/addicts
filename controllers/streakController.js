const Streak = require('../models/streak');
const mongoose = require('../connection');

exports.addcontent = (req, res) => {

    let streaks = new Streak(
        {
            date: req.body.date,
            value: req.body.value,
        }
    );

    streaks.save(function (err) {
        if (err) {
            res.send({"status": "Fail", "error": err});
        }
        else{
        res.send({"status": "Success"});
        }
    })  
}

exports.getstreaks = (req, res) => {
    let streaks = mongoose.model('Streak');
    streaks.find({}, (err, data) => {
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
