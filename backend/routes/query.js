const User = require('../models/User');

User.find({}).toArray(function (err, result){
    if (err) throw err;
    console.log(result);
});