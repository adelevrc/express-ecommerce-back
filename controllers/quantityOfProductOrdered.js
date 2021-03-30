const QuantityOfProductOrdered = require('../models/QuantityOfProductOrdered'); 

exports.quantityOfProductOrdered =  async (req, res) => {
  try{
      const quantityOfProductOrdered  = await QuantityOfProductOrdered.findById(req.params.id);
      res.json(quantityOfProductOrdered); 
  }catch(err){
      res.json({ message : err })
  }
}; 


exports.createQuantityOfProduct = async (req, res) => {
  const quantity = new QuantityOfProductOrdered ({
      quantity: req.body.quantity,
      order: req.body.order, 
      product: req.body.product
  }); 
  try{
      const savedQuantity= await quantity.save();
      res.json(savedQuantity);

  }catch(err){
      res.json({ message : err });
  }
}