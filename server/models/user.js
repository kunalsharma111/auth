const mongooose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongooose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50
    },
    lastName: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50
    },
    email: {
        type: String,
        maxlength: 255,
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    },
    activeStatus : {
        type : Boolean,
        default: true
    }
},
{
    timestamps: true
})


// hashing the password
saltSecret:String;
userSchema.pre('save', function(next){
    bcrypt.genSalt(10, (err,salt) => {
        bcrypt.hash(this.password, salt, (err,hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        })
    })
})

const User = mongooose.model('User',userSchema);