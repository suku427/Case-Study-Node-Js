const express = require("express");

const router = express.Router();
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
  getProductById,
  getProductsDashboard, 
} = require("../controllers/products");

router.route("/").get(getAllProducts).post(createProduct);


router
  .route("/:id")
  .get(getProductById)
  .put(updateProduct)
  .delete(deleteProduct);

router.get('/dashboard/products', getProductsDashboard);

module.exports = router;
