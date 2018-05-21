const express = require('express');
const app = express();
let port = 8000;
const bodyParser = require('body-parser');
app.use(bodyParser());
// express is required in modules/shop
require('./modules/shop')(app)



app.listen(port, ()=>{
    console.log('Listening on local host', port);
});