const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=> {
  if(err) {
    return console.log("Unable to connect to server");
  } console.log("Connected to server");

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5c86a1f8cd214c1f15773125')
  },{
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result)=> {
    console.log(result);
  }, (err)=> {
    console.log("Unable to update");
  })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5c86ad03cd214c1f15773150')
  }, {
    $set: {
      name: "Aayush Bhagat"
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result)=> {
    console.log(result);
  }, (err)=> {
    console.log("Unable to update");
  })
});
