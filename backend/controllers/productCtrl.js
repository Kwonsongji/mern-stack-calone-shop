const db = require('../config/db');
const Product = require('../models/Product');
const datas = require('../data/datas');


const productCtrl = {
  sendDatasProductToMoongoose: async (req, res) => {
    try {
      //await db.products.dropIndexes({})
      await Product.deleteMany({})
                    //.remove({});  
      const createdProducts = await Product.insertMany(datas.products);
      console.log('Data Import Sucess createdProducts',createdProducts);
      res.send({ createdProducts});
    } catch (error) {
      res.status(500).send(error.message)
    }
  },  

  getAllProducts: async (req, res) => {
    try {
      console.log("req :", req.body);
      // Product.find({})
      const products = await Product.find()
        .then((Document) => {
          console.log("Document: ", Document);
           console.log("Req.params: ", req.params);
           if (!Document) {
            return res
                    .status(404)
                    .json({ message: "This ressource doesn't exist " });
          } 
          res.status(200).json(datas.products);
         })
        .catch((error) => {
          console.log(error);
          res.status(500).json(error)
        });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
    }
  },
    getProductById: async (req, res) => {
      try {
 /*        const product = await Product.findOne(_id)  */
        const product = await Product.findById(req.params.id)  
        /*  .then((Document) => {
          if (!Document) {
            return res
              .status(404)
              .json({ message: "This document doesn't exist" });
          }
          res.status(200).json(Document);
        })
        .catch((error) => {
          res.status(500).json(error);
        });  */
       res.send(product); // return moi les données en json
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  },
 
};

module.exports = productCtrl;

 