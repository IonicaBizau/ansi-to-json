"use strict";

const ansiToJson = require("../lib");
console.log(JSON.stringify(ansiToJson("\u001b[38;5;196mHello\u001b[39m \u001b[48;5;226mWorld\u001b[49m"), null, 4));
// [
//     {
//         "content": "Hello",
//         "fg": "255, 0, 0",
//         "bg": null,
//         "fg_truecolor": null,
//         "bg_truecolor": null,
//         "was_processed": true
//     },
//     {
//         "content": " ",
//         "fg": null,
//         "bg": null,
//         "fg_truecolor": null,
//         "bg_truecolor": null,
//         "was_processed": false
//     },
//     {
//         "content": "World",
//         "fg": null,
//         "bg": "255, 255, 0",
//         "fg_truecolor": null,
//         "bg_truecolor": null,
//         "was_processed": true
//     }
// ]

console.log(JSON.stringify(ansiToJson("\x1b[30mblack\x1b[37mwhite"), null, 4));
// [
//     {
//         "content": "black",
//         "fg": "0, 0, 0",
//         "bg": null,
//         "fg_truecolor": null,
//         "bg_truecolor": null,
//         "was_processed": true
//     },
//     {
//         "content": "white",
//         "fg": "255,255,255",
//         "bg": null,
//         "fg_truecolor": null,
//         "bg_truecolor": null,
//         "was_processed": true
//     }
// ]
