const{ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const{User} = require('./../server/models/user')


/*Todo.remove({}).then((result) => {
  console.log(result);
});*/
Todo.findOneAndRemove({_id:'5a9208e38e3208889f771a94' }).then((todo) => {
  console.log(todo);
});

Todo.findByIdAndRemove('5a9208e38e3208889f771a94').then((todo) => {
  console.log(todo);
});
