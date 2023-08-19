const knex = require("knex")(require("../knexfile.js"));
const query = require("express");
const productModel = require("../models/productModel");

exports.index = async (req, res) => {
  const page = req.query.page;
  const limit = req.query.limit;
    try {
        const { products, totalCount } = await productModel.getAllProducts(page, limit);
        res.status(200).json({ products, totalCount });
    } catch (err) {
        res.status(400).send(`Error retrieving Products ${err}`);
    }
}

exports.getProductCategory = async (req, res) => {
  const sortBy = req.query.sort_by;
  let orderBy = req.query.order_by;
  const searchQuery = req.query.s;
  const category = req.params.category;

  try {
    let products;
    if (sortBy) {
      if (!orderBy) {
        orderBy = "asc";
      }
      products = await productModel.getSortedProducts(sortBy, orderBy);
      res.status(200).json(products);
    } else if (searchQuery) {
      products = await productModel.getSearchedProducts(searchQuery);
      res.status(200).json(products);
    } else {
      products = await productModel.getCategorizedProducts(category);
      res.status(200).json(products);
    }
  } catch (err) {
    res.status(400).send(`Error retrieving Products ${err}`);
  }
};

exports.postProductList = async () => {
  try {
  } catch (err) {}
};

exports.getProductItem = async () => {
  try {
  } catch (err) {}
};

exports.editProductItem = async () => {
  try {
  } catch (err) {}
};

exports.deleteProductItem = async () => {
  try {
  } catch (err) {}
};
