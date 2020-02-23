const twilio = require('twilio');

exports.triggersms = (req, res) => {
    req.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");



    var accountSid = 'AC43c3c5b7ed5240e1cf17d5847d389f81'; // Your Account SID from www.twilio.com/console
    var authToken = '3e4860215a426540e3b331c9561f33c7';   // Your Auth Token from www.twilio.com/console

    // var twilio = require('twilio');
    const client = new twilio(accountSid, authToken);

    client.messages.create({
        body: 'Hello from Node',
        to: '4806163942',  // Text this number
        from: '12055909366' // From a valid Twilio number
    })
    .then((message) => {
        console.log(message.sid);
    })

    client.messages.create({
        body: 'Hello from idhant',
        to: '4805775641',  // Text this number
        from: '12055909366' // From a valid Twilio number
    })
    .then((message) => {
        console.log(message.sid);
        res.send('success')
    })

}



