const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc';

/*bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log(hash);
  });
});*/
var hashedPassword = '$2a$10$PpWXWAI2qNuyOLCWEjMPn.rE52JcYvGVmCiu8MDnx1AX56d7XWh82';
//var hashedPassword = '$2a$10$G4lbHtVgMyenzPkvbOSomeHdmnjek1MG2yK53h9SwTZRKwmOre58C';
bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});



/*var data = {
  id: 10
};

var token = jwt.sign(data,'123abc');
console.log(token);

var decoded = jwt.verify(token, '123abc');
console.log(decoded);*/
//jwt.sign
//jwt.verify



/*var message = 'I am user number 3';
var hash = SHA256(message).toString();

console.log(`Message: ${message}`);
console.log(`Hash: ${hash}`);*/
