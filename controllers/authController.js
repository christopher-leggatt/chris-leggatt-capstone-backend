// const knex = require('knex')(require('../knexfile'));
const environment = process.env.NODE_ENV || 'development';
const config = require('./knexfile')[environment];
const knex = require('knex')(config);
const authModel = require("../models/authModel");

exports.createAuthsLogin = async (req, res) => {
    const { username, password } = req.body;
    
    try {
        const login = await authModel.createAuthLogin(username, password);
        res.status(200).json(product);
    } catch (err) {
        res.status(400).send(`Error logging in: ${err}`);

    }
}

exports.postAuthsSignup = async () => {
    try {} catch (err) {}
}