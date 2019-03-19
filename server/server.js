var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

//configure the middleware
app.use(bodyParser.json());

app.post('/todos', (req, res)=> {

  var todo = new Todo({
    text: req.body.text,
    completed: req.body.completed,
    completedAt: req.body.completedAt
  });

  todo.save().then((doc)=> {
    res.send(doc);
  }, (e)=> {
    res.status(400).send(e);
  });

});

app.get('/todos', (req, res)=> {
  Todo.find().then((todos)=> {
    res.send({todos})
  }, (e)=> {
    res.status(400).send(e);
  });
});

app.get('/todos/:id',(req, res)=> {
  var id = req.params.id;

  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  Todo.findById(id).then((todo)=> {
    if(!todo) {
      return res.status(404).send();
    }
    res.send({todo});

  }).catch((e)=> {
    res.status(404).send();
  })
});

app.delete('/todos/:id', (req, res)=> {
  var id = req.params.id;

  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  Todo.findByIdAndRemove(id).then((todo)=> {
    if(!todo) {
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e)=> {
    res.status(400).send();
  })
});

app.listen(port, ()=> {
  console.log(`Started on port ${port}`);
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
