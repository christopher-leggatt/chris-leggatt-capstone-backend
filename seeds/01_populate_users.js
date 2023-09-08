const uuidv4 = require("uuid").v4;

exports.seed = function (knex) {
  return knex("users")
    .del()
    .then(function () {
      return knex("users").insert([
        {
          id: uuidv4(),
          username: "user1",
          email: "user1@example.com",
          password: "password1", 
          phone: "123-456-7890",
          is_admin: false,
        },
        {
          id: uuidv4(),
          username: "user2",
          email: "user2@example.com",
          password: "password2", 
          phone: "234-567-8901",
          is_admin: false,
        },
        {
          id: uuidv4(),
          username: "admin",
          email: "admin@example.com",
          password: "adminpass", 
          phone: "345-678-9012",
          is_admin: true,
        },
      ]);
    });
};
