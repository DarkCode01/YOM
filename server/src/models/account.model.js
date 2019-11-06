const { Schema, model } = require('mongoose');
const { createHashPassword } = require('../utils/password');
const { generateURLGravatarOfAccount } = require('../utils/account');


const AccountSchema = new Schema({
    gravatar: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: [true, 'hey yo, u need a username bro!'],
        unique: true
    },
    firts_name: String,
    last_name: String,
    email: {
        type: String,
        required: [true, 'where is u email man?'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'is it a joke, u need a pass xD'],
        set: createHashPassword
    }
});

// Pre save model.
AccountSchema.pre('save', function(next) {
    this.gravatar = generateURLGravatarOfAccount(this.email);

    next();
});


module.exports = model('Account', AccountSchema);