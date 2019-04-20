'use strict';

var properties = require('../package.json');
var zipCodeService = require('../service/zip-code');

var controllers = {
    about: function(req, res) {
        var aboutInfo = {
            name: properties.name,
            version: properties.version
        };

        res.json(aboutInfo);
    },
    get_distance: function(req, res) {
        zipCodeService.findDistanceBetween(req, res, function(err, dist) {
            if (err) {
                res.send(err);
            }

            res.json(dist);
        });
    },
    get_location_details: function(req, res) {
        zipCodeService.findLocationDetails(req, res, function(err, details) {
            if (err) {
                res.send(err);
            }

            res.json(details);
        });
    }
};

module.exports = controllers;