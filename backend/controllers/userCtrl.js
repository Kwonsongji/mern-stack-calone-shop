const User = require('../models/User');
const datas = require('../data/datas.js');
const bcrypt = require('bcryptjs');
const generateToken = require('../utils.js');


const userCtrl = {
  sendDatasUserToMoongoose: async (req, res) => {
    try {
      //await User.remove({});
      const createdUsers = await User.insertMany(datas.users);
      console.log('createdUsers',createdUsers );
      res.send({ createdUsers});
    } catch (error) {
      res.status(500).send(error.message)
    }
  },
  login: async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          res.send(
            {
              _id: user._id,
              name: user.name,
              email: user.email,
              isAdmin: user.isAdmin,
              token: generateToken(user)
            }
          );
          return;
        }
      }
      res.status(401).send({ message: 'Invalid email or password '})
    } catch (error) {
        res.status(500).send(error.message)
    }
  },
  register: async (req, res) => {
    try {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
      });
      const createdUser = await user.save(); //créer un nouv' user et set dans la const createdUser
      res.send(
        {
          _id: createdUser._id,
          name: createdUser.name,
          email: createdUser.email,
          isAdmin: createdUser.isAdmin,
          token: generateToken(createdUser)
        }
      )
    } catch (error) {
       res.status(500).send(error.message)
    }
  }

};

module.exports = userCtrl;

