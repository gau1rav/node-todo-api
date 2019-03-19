const {ObjectID} = require('mongodb');
const {mongoose} =  require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5c8fe24405ce614714f44df2';
var userID = '5c87f28cfd18864511a9e7a6';

if(!ObjectID.isValid(id)) {
  console.log('Id not valid');
}

Todo.find({
  _id: id
}).then((todos)=> {
  console.log('Todos',todos);
});

Todo.findOne({
  _id: id
}).then((todo)=> {
  console.log('Todo',todo);
});

Todo.findById(id).then((todo)=> {
  if(!todo) {
    return console.log('Cannot find ID');
  }
  console.log('Todo',todo);
}).catch((e)=> console.log(e));

User.findByID(userID).then((user)=> {
  if(!user) {
    return console.log('Cannot find user');
  } console.log(JSON.stringify(user, undefined, 2));

}).catch((e)=> console.log(e));
