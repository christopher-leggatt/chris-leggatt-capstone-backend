const knex = require("../db");
const { v4: uuidv4 } = require("uuid");

exports.createAuthLogin = async (username, password) => {
    const foundUser = await knex("users")
    .where(username === users.username && password === users.password)
    .select();
    if (!foundUser) {
        return res.status(401).json({ message: 'Unauthorized' })
    }
    try {
    } catch (err) {

    }
}