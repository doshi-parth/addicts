const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const web = require('./routes/web');


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', web);

app.listen(3000, () => {
 console.log("Server running on port ");
});
