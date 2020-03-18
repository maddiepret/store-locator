let NodeGeocoder = require('node-geocoder');

let options = {
    provider: process.env.GEOCODER_PROVIDER,

    httpAdapter: 'https',
    apiKey: process.env.GEOCODER_API_KEY,
    formatter: null
};

//initialize
let geocoder = NodeGeocoder(options);

module.exports = geocoder;