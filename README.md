
# ansi-to-json

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][paypal-donations] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/ansi-to-json.svg)](https://www.npmjs.com/package/ansi-to-json) [![Downloads](https://img.shields.io/npm/dt/ansi-to-json.svg)](https://www.npmjs.com/package/ansi-to-json) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Convert ANSI strings into JSON output.

## :cloud: Installation

```sh
$ npm i --save ansi-to-json
```


## :clipboard: Example



```js
const ansiToJson = require("ansi-to-json");
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
```

## :memo: Documentation


### `ansiToJson(input)`
Convert ANSI strings into JSON output.

#### Params
- **String** `input`: The input string.

#### Return
- **Array** The parsed input.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:


## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
