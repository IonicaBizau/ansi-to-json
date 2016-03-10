"use strict";

const ansiToJson = require("../lib");

console.log(JSON.stringify(ansiToJson("\x1b[30mblack\x1b[37mwhite"), null, 4));
// [
//     {
//         "color": {
//             "fg": "0, 0, 0",
//             "bg": null
//         },
//         "content": "black",
//         "html": {
//             "styles": [
//                 "color:rgb(0, 0, 0)"
//             ],
//             "attributes": ""
//         },
//         "attributes": {}
//     },
//     {
//         "color": {
//             "fg": "255,255,255",
//             "bg": null
//         },
//         "content": "white",
//         "html": {
//             "styles": [
//                 "color:rgb(255,255,255)"
//             ],
//             "attributes": ""
//         },
//         "attributes": {}
//     }
// ]
