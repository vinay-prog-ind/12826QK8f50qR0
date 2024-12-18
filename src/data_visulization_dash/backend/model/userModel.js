const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    user: {
        type: String,
        require: [true, 'Unsername is required'],
        unique: true,
    },
    password: {
        type: String,
        require: [true, "user must enter a password"],
        select: false
    },
    confirm: {
        type: String,
        require: [true, "user must enter a password"],
        validate: {
            validator: function(el) {
                return el === this.password
            },
            message: "Passwords are not same"
        }
    }
});

userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next();


    this.password = await bcrypt.hash(this.password, 12);
    this.confirm = undefined;
    next();
})

userSchema.methods.correctPassword = async function(clientPassword, userPassword){
    return await bcrypt.compare(clientPassword, userPassword);
}

const User = mongoose.model('user', userSchema);

module.exports = User;