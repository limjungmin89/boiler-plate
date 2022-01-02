const mongoose = require('mongoose');

const saltRounds = 10;

const userSchema = mongoose.Schema({
    name: {
        type: String,
        max : 50
    },
    email: {
        type : String,
        unique :1
    },
    password: {
        type : String,
        min : 5
    },
    lastname: {
        type : String,
        max: 50
    },
    role: {
        type : Number,
        default: 0
    },
    token: {
        type : String
    },
    tokenExp: {
        type : Number
    }
})

// 몽구스에서 제공하는 pre 를 사용하여 save 전에 function 수행 후 next
userSchema.pre('save', function( next ) {
    var user = this;

    // 비밀번호가 변경될 경우만 비밀번호 암호화 로직
    if(user.isModified('password')) {
        // 비밀번호 암호화
        bcrypt.genSalt(saltRounds, function(err, salt) {
            if(err) return next(err);
            bcrypt.hash(user.password, salt, function(err, hash) {
                if(err) return next(err);
                user.password = hash;
                next();
            });
        });
    }

    next();
})

const User = mongoose.model('User',userSchema);

module.exports = {User}