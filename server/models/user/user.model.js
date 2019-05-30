const mongoose = require('mongoose');
const UserSchema = require('./user.schema');
const UserModel = mongoose.model('UserModel', UserSchema);

// Create new user into MongoDB
UserModel.createUser = (user) => {
    return UserModel.create(user);
}

// Find user by crendentials
UserModel.findUserByCredentials = (username, password) => {
    return UserModel.findOne({username: username, password:password})
}

// Find user by username
UserModel.findUserByUsername = (username) => {
    return UserModel.findOne({username: username});
}

module.exports = UserModel;