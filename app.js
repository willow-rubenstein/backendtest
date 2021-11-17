var express = require('express');
var app = express();
app.get('/',function(req,res){
    res.status(200).send('OK');
})
var port = 9000;
app.listen(port);
console.log('Listening on port', port);