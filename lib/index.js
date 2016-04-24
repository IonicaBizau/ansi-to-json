"use strict";

const Anser = require("anser");

/**
 * ansiToJson
 * Convert ANSI strings into JSON output.
 *
 * @name ansiToJson
 * @function
 * @param {String} input The input string.
 * @return {Array} The parsed input.
 */
function ansiToJson (input) {
    return Anser.ansiToJson(input, {
        json: true
      , remove_empty: true
    });
}

module.exports = ansiToJson;
