const mongoose = require('mongoose');
// Avec Mongoose, on commence tjrs par un schéma. Chaque schéma correspond à une collect. MongoDB et définit la forme des docs au sein de cette collect.
// 1°) Créer une instance(un objet) appellé productSchema de la classe mongoose.Schema avec new :

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  material: {
    type: String,
    required: true
  },
 
  countInStock: {
    type: Number,
    required: true
  },
}, {
  timestamps: true
})
// 2°) Pour utiliser notre définition de schéma, 
// on doit convertir productSchema en un modèle avec lequel nous pouvons travailler.
//Pour ce faire,on le passe dans mongoose.model(modelName, schema) :
const Product = mongoose.model('Product', productSchema);

module.exports = Product;