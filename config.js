// config.js
require('dotenv').config();

const config = {
    port: process.env.PORT || 3000,
    googleScriptUrl: process.env.GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbxk_fwb5wZozlv2-rqvEg-y6CZ8E-fhsYypuIDVEiUlfvfb277wwhFIIHt-dFRCHf4Wug/exec',
    corsEnabled: true,
    requestTimeout: 10000
};

module.exports = config;