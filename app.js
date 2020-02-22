const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const web = require('./routes/web');




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', web);

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

