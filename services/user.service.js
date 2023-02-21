const db = require("../models");
const {createNew} = require('../utils/queries')
const User = db.user;

const createUser = (userDetails) => {
    const newUser = createNew(User, userDetails);
    return newUser;
}

modules.exports = {
    createUser
}

