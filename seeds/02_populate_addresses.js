exports.seed = function (knex) {
  return knex("addresses")
    .del()
    .then(function () {
      return knex("addresses").insert([
        {
          firstName: "John",
          lastName: "Doe",
          country: "Canada",
          street1: "123 Elm Street",
          street2: "Apt 4B",
          city: "Calgary",
          province: "AB",
          postalCode: "12345",
        },
        {
          firstName: "Jane",
          lastName: "Smith",
          country: "Canada",
          street1: "456 Oak Avenue",
          street2: "Suite 12",
          city: "Edmonton",
          province: "AB",
          postalCode: "67890",
        },
        {
          firstName: "Bob",
          lastName: "Johnson",
          country: "Canada",
          street1: "789 Maple Drive",
          street2: "",
          city: "Fort McMurray",
          province: "AB",
          postalCode: "11223",
        },
      ]);
    });
};
