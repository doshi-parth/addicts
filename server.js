var https = require('https');

var fs = require('fs');

var https_options = {

  key: fs.readFileSync("/etc/letsencrypt/live/simplyq.tech/privkey.pem"),

  cert: fs.readFileSync("/etc/letsencrypt/live/simplyq.tech/fullchain.pem")
};

https.createServer(options, function (req, res) {

    res.writeHead(200);
   
    res.end("Welcome to Node.js HTTPS Servern");
   
   }).listen(8443)