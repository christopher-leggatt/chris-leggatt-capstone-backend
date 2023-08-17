const {
  productsData,
  vaporizersData,
  prerollsData,
  ediblesData,
  concentratesData,
  topicalsData,
  flowerData,
  seedsData,
} = require("./seed_data/seed_data_products");
const uuidv4 = require("uuid").v4;

exports.seed = async function (knex) {
  const lorenIpsum =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  await knex("vaporizers").del();
  await knex("products").del();

  for (const productData of productsData) {
    const product = {
      id: uuidv4(),
      name: productData.name,
      category: productData.category,
      brand: productData.brand,
      image_url_primary: `localhost:5050/assets/images/products/vaporizers/${productData.name
        .replace(/\s+/g, "_")
        .toLowerCase()}_primary.jpg`,
      image_url_description: productData.name,
      description: productData.description || lorenIpsum,
      price: productData.price,
    };

    await knex("products").insert(product);

    switch (productData.category) {
      case "vaporizers":
        const vaporizer = {
          id: uuidv4(),
          product_id: product.id,
          subcategory: vaporizersData.subcategory,
          weight: vaporizersData.weight,
          type: vaporizersData.type,
          thc: vaporizersData.thc,
          cbd: vaporizersData.cbd,
        };

        await knex("vaporizers").insert(vaporizer);
        break;

      case "concentrates":
        const concentrate = {
          id: uuidv4(),
          product_id: product.id,
          subcategory: concentratesData.subcategory,
          weight: concentratesData.weight,
          type: concentratesData.type,
          thc: concentratesData.thc,
          cbd: concentratesData.cbd,
        };

        await knex("concentrates").insert(concentrate);
        break;

      case "edibles":
        const edible = {
          id: uuidv4(),
          product_id: product.id,
          subcategory: ediblesData.subcategory,
          quantity: ediblesData.quantity,
          type: ediblesData.type,
          thc: ediblesData.thc,
          cbd: ediblesData.cbd,
        };

        await knex("edibles").insert(edible);
        break;

      case "prerolls":
        const preroll = {
          id: uuidv4(),
          product_id: product.id,
          subcategory: prerollsData.subcategory,
          quantity: prerollsData.quantity,
          type: prerollsData.type,
          thc: prerollsData.thc,
          cbd: prerollsData.cbd,
        };

        await knex("prerolls").insert(preroll);
        break;

      case "flower":
        const flower = {
          id: uuidv4(),
          product_id: product.id,
          subcategory: flowerData.subcategory,
          weight: flowerData.weight,
          type: flowerData.type,
          thc: flowerData.thc,
          cbd: flowerData.cbd,
        };

        await knex("flower").insert(flower);
        break;

      case "topicals":
        const topical = {
          id: uuidv4(),
          product_id: product.id,
          subcategory: topicalsData.subcategory,
          type: topicalsData.type,
          thc: topicalsData.thc,
          cbd: topicalsData.cbd,
        };

        await knex("topicals").insert(topical);
        break;

      case "seeds":
        const seed = {
          id: uuidv4(),
          product_id: product.id,
          quantity: seedsData.quantity,
          type: seedsData.type,
          thc: seedsData.thc,
          cbd: seedsData.cbd,
        };

        await knex("seeds").insert(seed);
        break;
    }
  }
};
