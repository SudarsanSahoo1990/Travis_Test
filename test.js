console.log('Tested');
var mongoose = require('mongoose');


var connect = mongoose.connect('mongodb://localhost:27017/iotaccdb');

connect.then(function(){
    console.log('connected');
})

console.log("Ennnnnnnnnnnnnnnnnnn"+process.env.NODE_ENV)