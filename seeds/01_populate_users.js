const uuidv4 = require("uuid").v4;
const bcrypt = require("bcrypt");

exports.seed = function (knex) {
  return knex("users")
    .del()
    .then(async function () {
      const hashPassword = async (password) => {
        const saltRounds = 10;
        return await bcrypt.hash(password, saltRounds);
      };

      return knex("users").insert([
        {
          id: uuidv4(),
          username: "Test User",
          email: "testuser@example.com",
          password: await hashPassword("12345"),
          phone: "123-456-7890",
          role: "member",
        },
        {
          id: uuidv4(),
          username: "user1",
          email: "user1@example.com",
          password: await hashPassword("password1"),
          phone: "123-456-7890",
          role: "member",
        },
        {
          id: uuidv4(),
          username: "user2",
          email: "user2@example.com",
          password: await hashPassword("password2"),
          phone: "234-567-8901",
          role: "member",
        },
        {
          id: uuidv4(),
          username: "admin",
          email: "admin@example.com",
          password: await hashPassword("adminpass"),
          phone: "345-678-9012",
          role: "admin",
        },
      ]);
    });
};
