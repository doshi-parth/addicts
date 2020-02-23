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
    req.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    let streaks = mongoose.model('Streak');
    streaks.find({}, (err, data) => {
        if(err){
            // console.log(err);
            res.send({"status": "Fail", "err": "DB error"});
            return err;
          }
        if (data.length != 0){
            trigger();
            res.send({"status":"success", "data": data});
        }
        else{
            res.send({"status": "Fail", "err": "No records"});
        }
    })
}




// let msg = messages[1].body.split(" ")[1]

function trigger(){

    var accountSid = 'AC43c3c5b7ed5240e1cf17d5847d389f81'; // Your Account SID from www.twilio.com/console
    var authToken = '3e4860215a426540e3b331c9561f33c7';   // Your Auth Token from www.twilio.com/console
const client = require('twilio')(accountSid, authToken);

client.messages
      .list({
         to: '+12055909366',
         limit: 1
       })
      .then((messages) => {
        let msg = messages[0].body.split(" ")[1];
        // console.log(msg)
        let streaks = new Streak(
            {
                date: Math.floor(Date.now() / 1000),
                value: Number(msg),
            }
        );
    
        streaks.save(function (err) {
            if (err) {
                // res.send({"status": "Fail", "error": err});
                console.log('failed at add record')
            }
            else{
            // res.send({"status": "Success"});
            console.log('success at add new record')
            }
        }) 
      }
          );

}



