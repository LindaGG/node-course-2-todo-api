const{ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const{User} = require('./../server/models/user')
var id = '5a90bb3003662bc8100f1f25';
/*if(!ObjectID.isValid(id)){
  console.log('ID is not valid');
}*/

/*Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos', todos);
});

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo', todo);
});*/

/*Todo.findById(id).then((todo) => {
  if(!todo){
    return console.log('Id not found');
  }
  console.log('Todo', todo);
}).catch((e) => {
  console.log(e);
});*/

User.findById(id).then((user) => {
  if(!user){
    return console.log('Id not found');
  }
  console.log('User', user);
}).catch((e) => {
  console.log(e);
});
