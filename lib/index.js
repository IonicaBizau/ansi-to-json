"use strict";

const AnsiUp = require("ansi_up");

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
    return AnsiUp.ansi_to_json(input, {
        json: true
      , remove_empty: true
    });
}

module.exports = ansiToJson;
