// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


//url where our database is going to be in.
//For production it can aws url or heroku url
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=> {
  if (err) {
    return console.log('Unable to connect to the mongodb server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({completed: false}).toArray().then((docs)=> {
  //   console.log('Todos:');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err)=> {
  //   console.log('Unable to fetch documents');
  // });

   db.collection('Todos').find().count().then((count)=> {
     console.log(`Todos count: ${count}`);
   }, (err)=> {
     console.log('Unable to fetch documents');
   });

   db.collection('Users').find({name: 'Gaurav'}).toArray().then((docs)=> {
     console.log(JSON.stringify(docs,undefined,2));
   }, (err)=> {
     console.log('User not found');
   });

  // db.close();
});
