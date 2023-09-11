const knex = require("knex")(require("../knexfile"));
const { v4: uuidv4 } = require("uuid");

exports.listAllProduct = async () => {
  try {
    // const itemsPerPage = limit || 10;
    // const offset = (page - 1) * itemsPerPage || 0;

    const products = await knex("products")
      .select();
      // .limit(itemsPerPage)
      // .offset(offset);

    const countResult = await knex("products").count("id as total");
    const totalCount = countResult[0].total;

    return { products, totalCount };
  } catch (err) {
    throw new Error(`Error retrieving Products: ${err}`);
  }
};

exports.createProductList = async (productList) => {
  const productsWithIds = productList.map((product) => ({
    id: uuidv4(),
    ...product,
  }));

  try {
    const ids = await knex("products").insert(productsWithIds);

    return ids;
  } catch (err) {
    throw new Error(`Error creating Products: ${err}`);
  }
};

exports.showProductItem = async (id) => {
  try {
    const product = await knex("products").where({ id: id }).select();

    return product;
  } catch (err) {
    throw new Error(`Error retrieving Product: ${err}`);
  }
};

exports.editProductItem = async (id, body) => {
  try {
    const product = await knex("products").where({ id: id }).update(body);

    return product;
  } catch (err) {
    throw new Error(`Error editing Product: ${err}`);
  }
};

exports.deleteProductItem = async (id) => {
  try {
    const product = await knex("products").where({ id: id }).del();

    return product;
  } catch (err) {
    throw new Error(`Error deleting Product: ${err}`);
  }
};

exports.listSortedProduct = async (sortBy, orderBy) => {
  try {
    let query = knex("products");

    const products = await query.orderBy(sortBy, orderBy);

    console.log(products);

    return products;
  } catch (err) {
    throw new Error(`Error retrieving Products: ${err}`);
  }
};

exports.listSearchedProduct = async (searchQuery) => {
  const searchColumns = ["name", "brand", "subcategory", "strain"];

  try {
    const query = knex("products");
    searchColumns.forEach((column) => {
      query.orWhere(column, "like", `%${searchQuery}%`);
    });
    const products = await query.select(...searchColumns);

    console.log(products);

    return products;
  } catch (err) {
    throw new Error(`Error retrieving Products: ${err}`);
  }
};

exports.listCategorizedProduct = async (category) => {
  try {
    console.log(knex("products").where("category", "=", category).toString());
    const products = await knex("products")
      .where("category", "=", category)
      .select("*");

    return products;
  } catch (err) {
    throw new Error(`Error retrieving Products: ${err}`);
  }
};
