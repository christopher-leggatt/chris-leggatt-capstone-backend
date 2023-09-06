const productsData = [

  // Vaporizers

  {
    name: "Lemon Haze Disposable Vape Pen",
    brand: "Hexo",
    category: "vaporizers",
    product_description:
      "Super Lemon Haze vape pen is a winning sativa strain that took home first place in the Medical Sativa category at the 2014 Seattle Cannabis Cup. It’s a Washington original, grown by at least two local cultivators. It’s a blend of Lemon Skunk and Super Silver Haze, and it has a sativa/indica ratio of 80:20. That means heady, peppy, cerebral effects such as: Our high-quality, all-in-one 0.25g vape pens strong THC potency, single-strain Lemon Haze formulation contains cannabinoids from sun-grown cannabis, and a native cannabis terpene blend. Thats it. The pen is breath activated for ease of use, leak free, includes a reservoir window and is packaged in a child-resistant format. The heating element is engineered to precisely atomize liquid and lasts for approximately 75 uses. A clean and smooth finish with the light aroma of terpenes is reminiscent of your favourite cannabis strain. HEXO Vape Pens are QPS Certified to be compliant with UL and CSA electrical safety standards. HEXO is dedicated to providing consumers with the highest quality products and is one of the first licensed producers in Canada to comply with voluntary industry standards for lithium battery safety.",
    price: 14.95,
    subcategory: "disposables",
    weight: 0.25,
    strain: "sativa",
    thc: 85,
    cbd: 2,
    thc_cbd_unit: "%",
  },
  {
    name: "Melon Monroe Disposable Vape Pen",
    category: "vaporizers",
    product_description:
    "Melon Monroe vape pen is a winning sativa strain that took home first place in the Medical Sativa category at the 2014 Seattle Cannabis Cup. It’s a Washington original, grown by at least two local cultivators. It’s a blend of Lemon Skunk and Super Silver Haze, and it has a sativa/indica ratio of 80:20. That means heady, peppy, cerebral effects such as: Our high-quality, all-in-one 0.25g vape pens strong THC potency, single-strain Lemon Haze formulation contains cannabinoids from sun-grown cannabis, and a native cannabis terpene blend. Thats it. The pen is breath activated for ease of use, leak free, includes a reservoir window and is packaged in a child-resistant format. The heating element is engineered to precisely atomize liquid and lasts for approximately 75 uses. A clean and smooth finish with the light aroma of terpenes is reminiscent of your favourite cannabis strain. HEXO Vape Pens are QPS Certified to be compliant with UL and CSA electrical safety standards. HEXO is dedicated to providing consumers with the highest quality products and is one of the first licensed producers in Canada to comply with voluntary industry standards for lithium battery safety.",
    brand: "Kazoo",
    price: 14.95,
    subcategory: "disposables",
    weight: 0.25,
    strain: "sativa",
    thc: 85,
    cbd: 2,
    thc_cbd_unit: "%",
  },  
  {
    name: "GLTO Cartridge",
    category: "vaporizers",
    brand: "AMBR",
    price: 44.95,
    subcategory: "cartridges",
    product_description: "Ambr’s Gelato #33 510 cartridge is made with botanical terpenes developed from the flavours and aroma found in Gelato, a hybrid cross between Sunset Sherbet and GSC. Gelato is known for its fruity taste and smell. Equipped with a ceramic atomizer for a smoother vaping experience. Device not included.",
    weight: 1,
    strain: "hybrid",
    thc: 83,
    cbd: 1,
    thc_cbd_unit: "%",
  },

  // Concentrates

  {
    name: "Fresh Frozen Hash Rosin",
    category: "concentrates",
    brand: "Nugz",
    price: 51.95,
    subcategory: "hash",
    product_description: "Nugz Fresh Frozen Hash Rosin (FFHR) is derived from single source indoor-grown genetics, frozen at harvest to preserve the flowers’ natural terpene profile, flavours, and aromas. FFHR is made by sieving frozen premium grade cannabis flower through 159µm to 45µm wash bags in ice water to produce a bubble hash that is then gently heated and pressed into a honey-like rosin. Nugz FFHR is offered in rotating single-source genetics drawn from their rare genetics library. Best stored in the fridge and brought to room temperature 10 minutes before your next sesh.",
    weight: 1,
    strain: "hybrid",
    thc: 71,
    cbd: 1,
    thc_cbd_unit: "%",
  },
  {
    name: "Black Lime Live Resin",
    category: "concentrates",
    brand: "Rad",
    price: 41.95,
    subcategory: "live_resin",
    product_description: "RAD Black Lime live resin is a wickedly potent concentrate that’s been crafted using only single strain fresh-frozen whole bud. This indica extract is packed with flavours of lemon, pine and black pepper that are sure to pack a punch.",
    weight: 1,
    strain: "indica",
    thc: 77,
    cbd: 1,
    thc_cbd_unit: "%",
  },
  {
    name: "Cherry Jam Shatter ",
    category: "concentrates",
    brand: "Wagners",
    price: 39.95,
    subcategory: "shatter",
    product_description: "WAGNERS Cherry Jam Shatter is produced using WAGNERS' number one strain, Cherry Jam. The glass-like appearance shows the care taken in producing this exceptional product. Glass like consistency, packed with flavour and at an approachable price, WAGNERS Cherry Jam Shatter is sure to continue the success of this storied strain.",
    weight: 1,
    strain: "hybrid",
    thc: 81,
    cbd: 1,
    thc_cbd_unit: "%",
  },

  // Prerolls

  {
    name: "Lemon Zaza Infused BLNT",
    category: "prerolls",
    brand: "Harts",
    price: 25,
    subcategory: "preroll_packs",
    product_description: "The Lemon ZaZa infused blunt pairs top shelf cannabis with crushed diamonds infused with terpenes. Perfect for connoisseurs, this infused blunt provides an explosion of lemon and citrus flavours.",
    item_quantity: 4,
    strain: "sativa",
    weight: 0.4,
    thc: 33,
    cbd: 1,
    thc_cbd_unit: "%",
  },
  {
    name: "Wes' Coast Kush Pre-Roll",
    category: "prerolls",
    brand: "Mtl Cannabis",
    price: 18.95,
    subcategory: "preroll_packs",
    product_description: "MTL’S WES` COAST KUSH is an indica-dominant strain. The flower is a hazy light green colour with purple undertones and is covered in white crystal trichomes. The smoke is packed with a sweet, earthy and spicy taste that finally culminates in a diesel aftertaste.",
    item_quantity: 3,
    weight: 1.5,
    strain: "indica",
    thc: 29,
    cbd: 1,
    thc_cbd_unit: "%",
  },
  {
    name: "Harvest Reserve Grape Diamonds Pre-Roll",
    category: "prerolls",
    brand: "Cherry Bomb",
    price: 19.95,
    subcategory: "singles",
    product_description: "Countryside’s Harvest Reserve Grape Diamonds premium pre-roll is a great way to taste-test our indoor premium flower.",
    item_quantity: 1,
    weight: 1,
    strain: "hybrid",
    thc: 25,
    cbd: 1,
    thc_cbd_unit: "%",
  },

  // Flower

  {
    name: "Grower's Choice Sativa",
    category: "flower",
    brand: "Good Supply",
    price: 79.95,
    subcategory: "all flower",
    product_description: "High-quality sativa-dominant bud at a great price; Good Supply is taking it to the next level with Grower's Choice.",
    weight: 28,
    strain: "sativa",
    thc: 20,
    cbd: 2,
    thc_cbd_unit: "%",
  },
  {
    name: "Vanilla Gelato",
    category: "flower",
    brand: "Holy Mountain",
    price: 112.45,
    subcategory: "all_flower",
    product_description: "It's always best to finish off an epic feast with some dessert -- that's where Vanilla Gelato from Holy Mountain comes in. This is an appetizing blend of kush, herbal and diesel notes, and sweet and floral confectionary aromas. Tall, tapered, medium-density buds of two-tone green await the beholder, accented with dark orange pistils. While the aroma may be confectionary, this is a mighty plant. Wield with care.",
    weight: 28,
    strain: "indica",
    thc: 22,
    cbd: 0,
    thc_cbd_unit: "%",
  },
  {
    name: "Cherry Cosmo",
    category: "flower",
    brand: "Valhalla Flwr",
    price: 37.75,
    subcategory: "all_flower",
    product_description: "A hybrid strain with vibrant purple buds that give off a woody, herbal aroma with a sweet and pungent flavour.",
    weight: 3.5,
    strain: "hybrid",
    thc: 28,
    cbd: 0,
    thc_cbd_unit: "%",
  },

  // Topicals

  {
    name: "Frankinsence Dead Sea Pink Himalayan Bath Salt",
    category: "topicals",
    brand: "Axea",
    price: 16.45,
    subcategory: "high_cbd",
    product_description: "AXEA's Himalayan bath salts blended with CBD are made with all-natural ingredients and provide a soothing, calming and luxurious bath while giving the skin and muscles the many advantages they have to offer with minerals they carry such as: magnesium, calcium, sulfur, bromide, iodine, sodium, zinc and potassium.",
    weight: "3.5g",
    strain: "sativa",
    weight: 500,
    thc: 250,
    cbd: 250,
    thc_cbd_unit: "mg",
  },
  {
    name: "Everyday Rollers",
    category: "topicals",
    brand: "Noon and Night",
    price: 52.95,
    subcategory: "high_cbd",
    product_description: "Roll on CBD with a double dose of Noon & Night's rollerball applicators: Freshly Minted and Shinrin Yoku. Freshly Minted delivers a cooling blend of peppermint, eucalyptus and more, while Shinrin Yoku is a warming blend of forest and citrus aromas. Enjoy 200mg of CBD in each rollerball, with invigorating and soothing essential oil blends for the senses.",
    weight: 20,
    thc: 0,
    cbd: 400,
    thc_cbd_unit: "mg",
  },
  {
    name: "Warming CBD Massage Oil",
    category: "topicals",
    brand: "Proofly",
    price: 19.45,
    subcategory: "high_cbd",
    product_description: "This non-greasy and quick absorbing massage oil which is infused with CBD and a small amount of THC also consists of Vitamin E, Arnica oil, Canola oil, Jojoba oil, and Almond oil to provide excellent glide during application. The Black pepper essential oil used in the formula provides a warming and comfortable sensation on the skin. For topical use only.",
    weight: 25,
    strain: "high_cbd",
    thc: 6,
    cbd: 125,
    thc_cbd_unit: "mg",
  },

  // Seeds

  {
    name: "Lillooet Landrace Seeds",
    category: "seeds",
    product_description: "Lillooett Landrace has been stabilized to finish outside in the very short Canadian summer growing season. This aromatic sativa-dominant hybrid typically flowers within 45 to 55 days, and is a great starter strain for those that have never grown cannabis before.",
    brand: "Pristine",
    weight: 10,
    price: 26.95,
    item_quantity: 4,
    strain: "sativa",
    thc: 250,
    cbd: 0,
    thc_cbd_unit: "mg",
    subcategory: "all_seeds",

  },
  {
    name: "CBD Rene Feminized Seeds",
    category: "seeds",
    subcategory: "all_seeds",
    product_description: "Five hybrid seeds. CBD Rene is an award-winning combination of flavour and high CBD. GGF crossed the René, a famous strain from Montreal (Himalyan indica x Skunk#1), with the Cannatonic (Resin Seeds CBD Queen) to produce a CBD-rich strain. René’s legendary berry smell, licorice flavour, and perfect popcorn buds shine through, while the Cannatonic delivers potent CBD at a 1:1 ratio. Please note that this package contains five seeds, but only four non-medical cannabis plants can be grown per household in BC. BC Cannabis Stores sell cannabis seeds which are intended to produce cannabis flowers or bud. BC Cannabis Stores does not guarantee successful cultivation or plant gender. In accordance with BC Cannabis Stores' Returns Policy, cannabis seeds which are unsuccessfully cultivated will not be eligible for a return on the basis that they are 'defective'",
    brand: "Northern Lights",
    weight: 10,
    price: 57.95,
    item_quantity: 5,
    strain: "hybrid",
    thc: 250,
    cbd: 250,
    thc_cbd_unit: "mg",
  },
  {
    name: "Pink Lemonade Seeds",
    category: "seeds",
    brand: "34 Street Seed Co.",
    price: 49.95,
    subcategory: "all_seeds",
    product_description: "This strain smells fruity, and screams lemons and grapefruit on the exhale. The bud is coated in a generous layer of trichomes atop jade foliage and bronze pistils. With a higher difficulty to grow, you can be rewarded with very high THC percentages and incredible terpene profiles. This genetic prefers warmer climates, so cold nights are to be avoided and should be harvested before October in North America. Yield: High THC: 18–27% CBD: < 1% Terpenes: 1–2% Flower Period: 8–8.5 Weeks Lineage: Pink Kush X Lemon Skunk Feminized",
    weight: 10,
    item_quantity: 5,
    strain: "hybrid",
    thc: 250,
    cbd: 250,
    thc_cbd_unit: "mg",
  },

  // Edibles

  {
    name: "THC Vegan Soft Chew",
    category: "edibles",
    product_description: "Cannabis leaf-shaped soft chews. Sour apple flavour and green in colour. This product is made with natural sweeteners and other ingredients that are made without animal products.",
    brand: "Bonbon",
    price: 4.50,
    subcategory: "gummies",
    weight: 20,
    strain: "sativa",
    thc: 2,
    cbd: 0,
    thc_cbd_unit: "mg",
    item_quantity: 5
  }, 
  {
    name: "BBQ Buzz Nutz",
    category: "edibles",
    product_description: "Flavour packed peanuts are the perfect snack, look no further than BBQ Buzz Nutz!",
    brand: "Astronutz",
    price: 6.75,
    subcategory: "savory snacks",
    weight: 50,
    strain: "hybrid",
    thc: 10,
    cbd: 0,
    thc_cbd_unit: "mg",
  },  
  {
    name: "Cafe Mocha Drink Mix",
    category: "edibles",
    product_description: "A highly versatile water-compatible THC hot beverage powder that allows consumers to instantly infuse warm water and create a comforting Café Mocha flavoured beverage. Each package contains two units of dissolvable powder with the equivalent of 5 mg of THC per unit. As a result, the consumer has total control over the dose and can infuse as little or up to 10 mg of THC per beverage. Shelf-stable and mixes instantly.",
    brand: "Hwy 59",
    price: 4.80,
    subcategory: "drinks",
    weight: 100,
    strain: "hybrid",
    thc: 10,
    cbd: 0,
    thc_cbd_unit: "mg",
  },   
];

module.exports = { productsData };
