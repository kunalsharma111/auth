const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI , { useNewUrlParser: true , useUnifiedTopology: true } ,
    (err) => {
    if(!err) { console.log('Mongo DB connected succeeded'); }
    else { console.log(err);
         console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined , 2)); }
});