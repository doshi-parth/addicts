const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const web = require('./routes/web');
const https = require('https');
const fs = require('fs');
const https_options = {

    key: fs.readFileSync("/etc/letsencrypt/live/simplyq.tech/privkey.pem"),
  
    cert: fs.readFileSync("/etc/letsencrypt/live/simplyq.tech/fullchain.pem")
  };

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use('/', web);
var httpsServer = https.createServer(https_options,app);
httpsServer.listen(3000);

// app.listen(3001, () => {
//  console.log("Server running on port ");
// });
