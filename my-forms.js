var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3000);

app.get('/', function(req,res){
	
	res.render('home');

});

app.get('/form-practice', function(req,res){

	var outputString = [];
	for(var x in req.query){
		
		outputString.push({'name':x,'value':req.query[x]});
		
	}
	
	var getText = {};
	getText.listItem = outputString;
	res.render('get-form', getText);

});

app.post('/form-practice', function(req,res){

	var outputString = [];
	for(var x in req.body){
	
		outputString.push({'name':x,'value':req.body[x]});
		
	}
	
	var postText = {};
	postText.listItem = outputString;
	res.render('post-form', postText);

});


app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});