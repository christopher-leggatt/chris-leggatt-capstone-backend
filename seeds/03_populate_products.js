const { productsData } = require("./seed_data/seed_data_products");
const uuidv4 = require("uuid").v4;

exports.seed = async function (knex) {
  const lorenIpsum =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  await knex("products").del();

  for (const productData of productsData) {
    const product = {
      id: uuidv4(),
      name: productData.name,
      brand: productData.brand,
      category: productData.category,
      subcategory: productData.subcategory,
      image_url: `http://localhost:5050/images/products/${productData.name
        .replace(/\s+/g, "_")
        .replace(/'/g, "")
        .toLowerCase()}.jpg`,
      image_url_description: productData.name,
      product_description: productData.product_description || lorenIpsum,
      weight: productData.weight || 100,
      weight_unit: productData.weight_unit || 'g',
      price: productData.price,
      strain: productData.strain,
      thc: productData.thc,
      cbd: productData.cbd,
      thc_cbd_unit: productData.thc_cbd_unit,
      item_quantity: productData.item_quantity || '1',
      inventory_quantity: productData.inventory_quantity || 99,

    };

    await knex("products").insert(product);
  }
};
