// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);


//url where our database is going to be in.
//For production it can aws url or heroku url
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=> {
  if (err) {
    return console.log('Unable to connect to the mongodb server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //     text: 'Something to do',
  //     completed: false
  //
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to inser Todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    name: 'Gaurav',
    age: 19,
    location: 'India'
  }, (err, result)=> {
    if(err) {
      return console.log('Unable to insert to user',err);
    }

    console.log(JSON.stringify(result.ops[0]._id, undefined, 2));
  });

  db.close();
});
