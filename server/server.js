var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

//configure the middleware
app.use(bodyParser.json());

app.post('/todos', (req, res)=> {

  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc)=> {
    res.send(doc);
  }, (e)=> {
    res.status(400).send(e);
  });

});

app.listen(3000, ()=> {
  console.log('Started on port 3000');
});

//creating an instance
// var newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// newTodo.save().then((doc)=> {
//   console.log('Saved todo', doc);
// }, (err)=> {
//   console.log("Unable to save Todo");
// });

// var otherTodo = new Todo({
//   text: ' Edit this video '
// });
//
// otherTodo.save().then((doc)=> {
//   console.log('Saved Todo', doc);
// }, (err)=> {
//   console.log('Unable to save');
// });


// var newUser = new User({
//   email: ' gau1ravgp@gmail.com '
// });
//
// newUser.save().then((doc)=> {
//   console.log('Saved User ', doc);
// },(err)=> {
//   console.log("unable to save user");
// });

module.exports = {
  app
};