const express = require('express');
const app = express();
let port = 8000;
const bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/riby_shop');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("DB Connection OPEN");
});

app.use(bodyParser());
require('./modules/shop')(app)



app.listen(port, ()=>{
    console.log('Listening on local host', port);
});