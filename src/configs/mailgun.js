const { getEnv } = require('../utils/getEnv');

const mailgun = require('mailgun-js')({
    apiKey: getEnv('MAILGUN_API_KEY'),
    domain: getEnv('MAILGUN_DOMAIN'),
    host: getEnv('MAILGUN_HOST')
});

module.exports = { mailgun };
