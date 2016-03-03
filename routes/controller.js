var express = require('express');
var app = express();

app.use(express.static('./public'));

app.get('/',function(req,res){
	res.redirect('/index.html');
});




module.exports = app;