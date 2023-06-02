const db = require('../models');
const query = require('../services/queries')
const User = db.user;

const createUser = async (req, res) => {
    const newUser = await query.create(User, req.body);
    res.send(newUser)
}
    
const findUser = async (req, res) => {
    console.log("in here?");
    const user = await query.search(User, req.body);
    if (user.length > 0) {
      const {userId, firstName, lastName, school, imageUrl } = user[0];
      return res.status(200).json({userId, firstName, lastName, school, imageUrl });
    } else {
      return res.sendStatus(401);
    }
  };
  
  
const getAllUsers = async(req, res) => {
    const allUsers = await query.getAll(User)
    res.send(allUsers);
}

const getUserById = async(req, res) => {
    const user = await query.search(User, req.params)
    res.send(user);
}

const updateUserDetail = async(req, res) => {
    const result = await query.update(User, req.params, req.body)
    if(result[0] == 0){
        res.send("No update perform")
    }
    else{
        res.send("Update successful")
    }
}


module.exports = {
    createUser,
    findUser,
    getAllUsers,
    getUserById,
    updateUserDetail
}

