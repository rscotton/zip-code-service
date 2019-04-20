var request = require('request');
var creds = require('../private/zip-code-api-creds');

const apiKey = process.env.ZIPCODE_API_KEY || creds.public_key;
const zipCodeURL = 'https://www.zipcodeapi.com/rest/';

var zipCodeService = {
    findDistanceBetween: function(req, res, next) {
        request(zipCodeURL + apiKey
                + '/distance.json/' + req.params.zipcode1 + '/'
                + req.params.zipcode2 + '/mile',
    function(error, response, body) {
                if (!error && response.statusCode === 200) {
                    response = JSON.parse(body);
                    res.send(response);
                } else {
                    console.log(response.statusCode + response.body);
                    res.send({ distance: -1 });
                }
            }
        );
    },
    findLocationDetails: function(req, res, next) {
        // Build url
        request(zipCodeURL + apiKey
            + '/info.json/' + req.params.zipcode + '/radians',
            function(error, response, body) {
                if (!error && response.statusCode === 200) {
                    response = JSON.parse(body);
                    res.send(response);
                } else {
                    console.log(response.statusCode + response.body);
                    res.send({ distance: -1 });
                }
            }
        );
    },
};

module.exports = zipCodeService;