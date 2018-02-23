//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    console.log('Unable to connect to MongoDB Server');

  }
  console.log('Connect to MongoDB Server');

  //deleteMany
  /*db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    console.log(result);
  });*/

  //deleteOne
  /*db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    console.log(result);
  });*/

  //findOneAndDelete
  /*db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    console.log(result);
  });*/

  /*db.collection('Users').deleteMany({name: 'Andrew'}).then((result) => {
    console.log(result);
  });*/

  db.collection('Users').findOneAndDelete({_id: new ObjectID('5a906e56e941d71ad01c143a')}).then((result) => {
    console.log(result);
  });

  //db.close();
});
