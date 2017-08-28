const Client = require('../lib/Client');

const client = new Client(process.env.API_KEY, process.env.API_REGION);

module.exports = client;
