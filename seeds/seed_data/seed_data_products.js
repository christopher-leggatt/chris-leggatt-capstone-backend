const productsData = [
  // Vaporizers
  {
    name: "Lemon Haze Disposable Vape Pen - Hexo - Disposable",
    category: "vaporizers",
    brand: "Hexo",
    description:
      "Super Lemon Haze vape pen is a winning sativa strain that took home first place in the Medical Sativa category at the 2014 Seattle Cannabis Cup. It’s a Washington original, grown by at least two local cultivators. It’s a blend of Lemon Skunk and Super Silver Haze, and it has a sativa/indica ratio of 80:20. That means heady, peppy, cerebral effects such as: Our high-quality, all-in-one 0.25g vape pens strong THC potency, single-strain Lemon Haze formulation contains cannabinoids from sun-grown cannabis, and a native cannabis terpene blend. Thats it. The pen is breath activated for ease of use, leak free, includes a reservoir window and is packaged in a child-resistant format. The heating element is engineered to precisely atomize liquid and lasts for approximately 75 uses. A clean and smooth finish with the light aroma of terpenes is reminiscent of your favourite cannabis strain. HEXO Vape Pens are QPS Certified to be compliant with UL and CSA electrical safety standards. HEXO is dedicated to providing consumers with the highest quality products and is one of the first licensed producers in Canada to comply with voluntary industry standards for lithium battery safety.",
    price: 14.0,
  },
  {
    name: "Melon Monroe Disposable Vape Pen",
    category: "vaporizers",
    brand: "Kazoo",
    price: 14.0,
  },
  {
    name: "Mandarin C X Tangie",
    category: "vaporizers",
    brand: "Mandarin",
    price: 30,
  },
  {
    name: "Mosa X Blood Orange",
    category: "vaporizers",
    brand: "Mosa",
    price: 28,
  },
  {
    name: "Juice Jar",
    category: "vaporizers",
    brand: "Juice",
    price: 19,
  },
  {
    name: "Peach Ringz",
    category: "vaporizers",
    brand: "Peach",
    price: 39,
  },
  {
    name: "Box Hot Guava Stardawg",
    category: "vaporizers",
    brand: "BoxHot",
    price: 46,
  },
  {
    name: "Bargain Brand Citrus",
    category: "vaporizers",
    brand: "BargainBrand",
    price: 27,
  },
  {
    name: "Spinach Feelz Tropical Diesel",
    category: "vaporizers",
    brand: "Spinach",
    price: 32,
  },
  {
    name: "Bargain Brand Grape",
    category: "vaporizers",
    brand: "Bargain Brand",
    price: 27,
  },
  {
    name: "Grapey Grape",
    category: "vaporizers",
    brand: "Grapey",
    price: 39,
  },
  {
    name: "Strawnana",
    category: "vaporizers",
    brand: "Straw",
    price: 39,
  },
  {
    name: "Banana OG X Kush Mints",
    category: "vaporizers",
    brand: "Banana",
    price: 28,
  },
  {
    name: "Powdered Donuts",
    category: "vaporizers",
    brand: "Powdered",
    price: 28,
  },
  {
    name: "Watermelon Mojo",
    category: "vaporizers",
    brand: "Watermelon",
    price: 32,
  },
  {
    name: "Acai Blxst Live Resin",
    category: "vaporizers",
    brand: "Acai",
    price: 40,
  },
  {
    name: "Purple Berry Live Resin",
    category: "vaporizers",
    brand: "Purple",
    price: 40,
  },
  {
    name: "Blackberry Cream (Disposable)",
    category: "vaporizers",
    brand: "Blackberry",
    price: 17,
  },
  {
    name: "Red Hawaiian",
    category: "vaporizers",
    brand: "Hawaiian",
    price: 29,
  },
  {
    name: "Jackfruit",
    category: "vaporizers",
    brand: "Jack",
    price: 19,
  },
  {
    name: "Purple Monkey",
    category: "vaporizers",
    brand: "Monkey",
    price: 20,
  },
  {
    name: "Fuego Berry N’Ice",
    category: "vaporizers",
    brand: "Fuego",
    price: 32,
  },
  {
    name: "K.O. by Night Night Blue Widow 3:2:1",
    category: "vaporizers",
    brand: "NightNight",
    price: 40,
  },
  {
    name: "CBD Earth",
    category: "vaporizers",
    brand: "Earth",
    price: 25,
  },
  // Concentrates
  {
    name: "Catacomb Kush Shatter",
    category: "concentrates",
    brand: "Catacomb",
    price: 30,
  },
  {
    name: "Loud Live Resin",
    category: "concentrates",
    brand: "Loud",
    price: 37,
  },
  {
    name: "Live Duo Resin",
    category: "concentrates",
    brand: "Live",
    price: 48,
  },
  // Prerolls
  {
    name: "Redees Cold Creek",
    category: "prerolls",
    brand: "Redees",
    price: 20,
  },
  {
    name: "The Drifter",
    category: "prerolls",
    brand: "Drifter",
    price: 9,
  },
  {
    name: "Cherry Bomb Reefers",
    category: "prerolls",
    brand: "Cherry Bomb",
    price: 15,
  },
  // Flower
  {
    name: "Super Lemon Haze",
    category: "flower",
    brand: "Super",
    price: 20,
  },
  {
    name: "Banjo",
    category: "flower",
    brand: "Banjo",
    price: 30,
  },
  {
    name: "Jean Guy",
    category: "flower",
    brand: "Jean Guy",
    price: 33,
  },
  // Topicals
  {
    name: "Baker Street Spray",
    category: "topicals",
    brand: "Baker Street",
    price: 32,
  },
  {
    name: "Penelope Spray",
    category: "topicals",
    brand: "Penelope",
    price: 30,
  },
  {
    name: "Good Supply THC Oil",
    category: "topicals",
    brand: "Good Supply",
    price: 35,
  },
  // Seeds
  {
    name: "Timewarp",
    category: "seeds",
    brand: "Timewarp",
    price: 58,
  },
  {
    name: "Northern Lights",
    category: "seeds",
    brand: "Northern Lights",
    price: 27,
  },
];

const vaporizersData = [
  {
    subcategory: "disposables",
    weight: "0.25g",
    type: "sativa",
    thc: 85,
    cbd: 2,
  },
  // Melon Monroe
  {
    subcategory: "disposables",
    weight: "0.25g",
    type: "sativa",
    thc: 85,
    cbd: 2,
  },
  // Mandarin C X Tangie
  {
    subcategory: "cartridges",
    weight: "1g",
    type: "sativa",
    thc: 85,
    cbd: 2,
  },
  // Mosa X Blood Orange
  {
    subcategory: "cartridges",
    weight: "1g",
    type: "sativa",
    thc: 85,
    cbd: 2,
  },
  // Juice Jar
  {
    subcategory: "cartridges",
    weight: "0.5g",
    type: "sativa",
    thc: 85,
    cbd: 2,
  },
  // Peach Ringz
  {
    subcategory: "cartridges",
    weight: "1g",
    type: "sativa",
    thc: 85,
    cbd: 2,
  },
  // Box Hot Guava Stardawg
  {
    subcategory: "cartridges",
    weight: "1.2g",
    type: "sativa",
    thc: 85,
    cbd: 2,
  },
  // Bargain Brand Citrus
  {
    subcategory: "cartridges",
    weight: "1g",
    type: "sativa",
    thc: 85,
    cbd: 2,
  },
  // Spinach Feelz Tropical Diesel
  {
    subcategory: "cartridges",
    weight: "1g",
    type: "sativa",
    thc: 85,
    cbd: 2,
  },
  // Grapey Grape
  {
    subcategory: "cartridges",
    weight: "1g",
    type: "indica",
    thc: 85,
    cbd: 2,
  },
  // Strawnana
  {
    subcategory: "cartridges",
    weight: "1g",
    type: "indica",
    thc: 85,
    cbd: 2,
  },
  // Banana OG X Kush Mints
  {
    subcategory: "cartridges",
    weight: "1g",
    type: "indica",
    thc: 85,
    cbd: 2,
  },
  // Powdered Donuts
  {
    subcategory: "cartridges",
    weight: "1g",
    type: "indica",
    thc: 85,
    cbd: 2,
  },
  // Watermelon Mojo
  {
    subcategory: "cartridges",
    weight: "1g",
    type: "indica",
    thc: 85,
    cbd: 2,
  },
  // Acai Blxst Live Resin
  {
    subcategory: "live_resin",
    weight: "1g",
    type: "indica",
    thc: 85,
    cbd: 2,
  },
  // Purple Berry Live Resin
  {
    subcategory: "cartridges",
    weight: "1g",
    type: "indica",
    thc: 85,
    cbd: 2,
  },
  // Blackberry Cream (Disposable)
  {
    subcategory: "cartridges",
    weight: "0.3g",
    type: "indica",
    thc: 85,
    cbd: 2,
  },
  // Red Hawaiian
  {
    subcategory: "cartridges",
    weight: "1g",
    type: "hybrid",
    thc: 85,
    cbd: 2,
  },
  // Jackfruit
  {
    subcategory: "cartridges",
    weight: "0.5g",
    type: "hybrid",
    thc: 85,
    cbd: 2,
  },
  // Purple Monkey
  {
    subcategory: "cartridges",
    weight: "0.5g",
    type: "hybrid",
    thc: 85,
    cbd: 2,
  },
  // Fuego Berry
  {
    subcategory: "disposables",
    weight: "0.3g",
    type: "indica",
    thc: 85,
    cbd: 2,
  },
  // K.O. by Night Night Blue Widow 3:2:1
  {
    subcategory: "cartridges",
    weight: "1g",
    type: "hybrid",
    thc: 85,
    cbd: 2,
  },
  // CBD Earth
  {
    subcategory: "cartridges",
    weight: "1g",
    type: "hybrid",
    thc: 85,
    cbd: 2,
  },
];

const concentratesData = [
  {
    subcategory: "shatter",
    weight: "1g",
    type: "indica",
    thc: 80,
    cbd: 1,
  },
  {
    subcategory: "live_resin",
    weight: "1g",
    type: "indica",
    thc: 80,
    cbd: 1,
  },
  {
    subcategory: "live_resin",
    weight: "1g",
    type: "hybrid",
    thc: 80,
    cbd: 1,
  },
];

const ediblesData = [
  {
    subcategory: "gummies",
    quantity: 5,
    weight: "1g",
    type: "indica",
    thc: 2,
    cbd: 1,
  },
  {
    subcategory: "gummies",
    quantity: 5,
    type: "indica",
    thc: 2,
    cbd: 1,
  },
  {
    subcategory: "gummies",
    quantity: 5,
    type: "hybrid",
    thc: 2,
    cbd: 1,
  },
];

const prerollsData = [
  {
    subcategory: "preroll_packs",
    quantity: 10,
    weight: "1g",
    type: "sativa",
    weight: "0.4g",
    thc: 20,
    cbd: 1,
  },
  {
    subcategory: "preroll_packs",
    quantity: 3,
    weight: "0.4g",
    type: "sativa",
    thc: 20,
    cbd: 1,
  },
  {
    subcategory: "preroll_packs",
    quantity: 3,
    weight: "0.4g",
    type: "sativa",
    thc: 20,
    cbd: 1,
  },
];

const flowerData = [
  {
    subcategory: "all_flower",
    weight: "3.5g",
    type: "sativa",
    thc: 20,
    cbd: 1,
  },
  {
    subcategory: "all_flower",
    weight: "3.5g",
    type: "sativa",
    thc: 20,
    cbd: 1,
  },
  {
    subcategory: "all_flower",
    weight: "3.5g",
    type: "sativa",
    thc: 20,
    cbd: 1,
  },
];

const topicalsData = [
  {
    subcategory: "high_cbd",
    weight: "3.5g",
    type: "sativa",
    weight: "0.4g",
    thc: 250,
    cbd: 0,
  },
  {
    subcategory: "high_cbd",
    weight: "3.5g",
    type: "sativa",
    thc: 250,
    cbd: 250,
  },
  {
    subcategory: "high_cbd",
    weight: "3.5g",
    type: "sativa",
    thc: 250,
    cbd: 50,
  },
];

const seedsData = [
  {
    quantity: 5,
    type: "sativa",
    thc: 250,
    cbd: 0,
  },
  {
    quantity: 4,
    type: "indica",
    thc: 250,
    cbd: 250,
  },
];

module.exports = {
  productsData,
  vaporizersData,
  prerollsData,
  ediblesData,
  concentratesData,
  topicalsData,
  flowerData,
  seedsData,
};
