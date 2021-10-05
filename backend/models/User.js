const mongoose = require('mongoose');
//onst bcrypt = require('bcryptjs');

// Avec Mongoose, on commence tjrs par un schéma. Chaque schéma correspond à une collect. MongoDB et définit la forme des docs au sein de cette collect.
// 1°) Créer une instance(un objet) appellé productSchema de la classe mongoose.Schema avec new :

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    /* trim: true */
  },
  //37 min
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
    required: true,
  },
  /* role: {
    type: Number,
    default: 0,
  }, */
  cart: {
    type: Array,
    default: []
  }  
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;