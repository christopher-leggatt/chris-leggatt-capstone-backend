// const knex = require('knex')(require('../knexfile'));
const environment = process.env.NODE_ENV || 'development';
const config = require('./knexfile')[environment];
const knex = require('knex')(config);

const authModel = require("../models/authModel");

exports.postAuthGoogle = async () => {
    try {} catch (err) {}

}

exports.postAuthFacebook = async () => {
    try {} catch (err) {}
}