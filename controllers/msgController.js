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
        body: "Hi! The area you've entered has been identified as a place likely to trigger you. \
        You are advised to leave the area immediately. If you're located inside the red zone for \
        10 minutes, your sponsor will be notified. If you feel triggered at any point,\
         contact helpline at +35636343 or talk with the chatbot in the app.",
        to: '4806163942',  // Text this number
        from: '12055909366' // From a valid Twilio number
    })
    .then((message) => {
        console.log(message.sid);
    })

    client.messages.create({
        body: "Hi! This is an automated message to alert you that your Sponsee,\
         John Doe, has spent over 10 minutes in an area concentrated with drinkers, \
         starting at [TIME]. You may choose to reach out to them and give them support.",
        to: '4805775641',  // Text this number
        from: '12055909366' // From a valid Twilio number
    })
    .then((message) => {
        console.log(message.sid);
        res.send('success')
    })

}



