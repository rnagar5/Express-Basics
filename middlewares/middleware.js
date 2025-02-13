const Ajv = require('ajv');
const ajv = new Ajv();
const productSchema = require('../schemas/productSchema'); 
const validateProduct = (req, res, next) => {
  const validate = ajv.compile(productSchema);
  const isValid = validate(req.body);

  if (!isValid) {
    return res.status(400).json({ errors: validate.errors });
  }
  
  next();
};
module.exports = validateProduct;

