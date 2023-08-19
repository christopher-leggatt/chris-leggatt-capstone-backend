const knex = require("knex")(require("../knexfile"));
const { getColumnsForTable } = require("../utils/utils");

exports.getAllProducts = async (page, limit) => {
  try {
    const itemsPerPage = limit || 10;
    const offset = (page - 1) * itemsPerPage || 0;

    const products = await knex("products")
      .select()
      .limit(itemsPerPage)
      .offset(offset);

    const countResult = await knex("products").count("id as total");
    const totalCount = countResult[0].total;

    return { products, totalCount };
  } catch (err) {
    throw new Error(`Error retrieving Products: ${err}`);
  }
};

exports.getCategorizedProducts = async (category) => {
  try {
    const products = await knex("products")
      .where("category", "=", category)
      .select("*");

    return products;
  } catch (err) {
    throw new Error(`Error retrieving Products: ${err}`);
  }
};
