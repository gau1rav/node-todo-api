const {ObjectID} = require('mongodb');

const {mongoose} =  require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.remove({}).then((result)=> {
  console.log(result);
}, (err)=> {
  console.log('Unable to remove');
});

// Todo.findOneAndRemove({_id: '5c90f21bcd214c17e1147eef'}).then((todo)=> {
//   console.log(todo);
// }, (err)=> {
//   console.log("Unable to remove");
// });

Todo.findByIdAndRemove('5c90f21bcd214c17e1147eef').then((todo)=> {
  console.log(todo);
}, (err)=> {
  console.log("Unable to remove");
});
