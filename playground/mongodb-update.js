//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    console.log('Unable to connect to MongoDB Server');

  }
  console.log('Connect to MongoDB Server');

  //findOneAndUpdate
  /*db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5a9088b7dd348876426f4e6c')
  }, {
    $set: {
      completed: true
    }}, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    });*/

    /*db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('5a8f9ce72757c519bc498c2b')
    }, {
      $set: {
        name: 'Linda'
      }
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    });*/

    db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('5a8f9ce72757c519bc498c2b')
    }, {
      $inc: {
        age: 1
      }
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    });



  //db.close();
});
