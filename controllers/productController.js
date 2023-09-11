const knex = require("knex")(require("../knexfile.js"));
const query = require("express");
const productModel = require("../models/productModel");

exports.index = async (req, res) => {
  try {
    const { products, totalCount } = await productModel.listAllProduct();
    res.status(200).json({ products, totalCount });
  } catch (err) {
    res.status(400).send(`Error retrieving Products ${err}`);
  }
};

exports.createProductsList = async (req, res) => {
  const productList = req.body;
  try {
    const products = await productModel.createProductList(productList);
    res.status(201).json(products[0]);
  } catch (err) {
    res.status(400).send(`Error adding Products: ${err}`);
  }
};

exports.showProductsItem = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await productModel.showProductItem(id);
    res.status(200).json(product);
  } catch (err) {
    res.status(400).send(`Error retrieving Product: ${id}: ${err}`);
  }
};

exports.editProductsItem = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const product = await productModel.editProductItem(id, body);
    res.status(200).json(product);
  } catch (err) {
    res.status(400).send(`Error updating Product: ${id}: ${err}`);
  }
};

exports.deleteProductsItem = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await productModel.deleteProductItem(id);
    res.status(204).json(product);
  } catch (err) {
    res.status(400).send(`Error deleting Product: ${id}: ${err}`);
  }
};

exports.listCategorizedProducts = async (req, res) => {
  const { sortBy, orderBy, s: searchQuery } = req.query;
  const { category } = req.params;

  try {
    let products;
    if (sortBy) {
      if (!orderBy) {
        orderBy = "asc";
      }
      products = await productModel.listSortedProduct(sortBy, orderBy);
      res.status(200).json(products);
    } else if (searchQuery) {
      products = await productModel.listSearchedProduct(searchQuery);
      res.status(200).json(products);
    } else {
      products = await productModel.listCategorizedProduct(category);
      res.status(200).json(products);
    }
  } catch (err) {
    res.status(400).send(`Error retrieving Products: ${err}`);
  }
};
