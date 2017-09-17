var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos =[{
	id:1,
	description:'Meet someone for lunch',
	completed: false
},{
	id:2,
	description:'go to market',
	completed: false
},{
	id:3,
	description:'go fuck yourslef',
	completed: true
}];

app.get('/', function(req, res){
	res.send('To do API server');
});

app.get('/todos', function(req,res){
	res.json(todos);
});

app.get('/todos/:id', function(req,res){
	var todoId = parseInt(req.params.id,10);
	var matchedTodo;
	todos.forEach(function(todo) {
		if( todoId === todo.id ){
			matchedTodo=todo;
		}
	});
	if(matchedTodo){
		res.json(matchedTodo);
	} else {
		res.json(404).send();
	}
});

app.listen(PORT, function(){
	console.log('express listening on port' + PORT + '!');
});