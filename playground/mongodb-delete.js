const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=> {
  if(err) {
    return console.log('Failed to connect');
  } console.log('Connected to mongodb server');

  //deleteMany
  // db.collection('Todos').deleteMany({text: "Eat Lunch"}).then((result)=> {
  //   console.log(result);
  // }, (err)=> {
  //    console.log('Unable to delete');
  // })

  //deleteOne: delets only first document found
//   db.collection('Todos').deleteOne({text: "Eat Lunch"}).then((result)=> {
//     console.log(result);
//   }, (err) => {
//     console.log("Unable to delete");
// });


  //findOneAndDelete: instead of result we get the document deleted
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=> {
  //   console.log(result);
  // }, (err)=> {
  //   console.log("Unable to delete");
  // });

  db.collection('Users').deleteMany({name: "Gaurav"}).then((result)=> {
    console.log(result);
  }, (err)=> {
    console.log("Unable to delete");
  });

  db.collection('Users').findOneAndDelete({_id: new ObjectID("5c84c8b41130ab7712eeeea2")}).then((result)=> {
    console.log(result);
  }, (err)=> {
    console.log("unable to delete");
  })

});
