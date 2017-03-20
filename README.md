
# ansi-to-json

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Version](https://img.shields.io/npm/v/ansi-to-json.svg)](https://www.npmjs.com/package/ansi-to-json) [![Downloads](https://img.shields.io/npm/dt/ansi-to-json.svg)](https://www.npmjs.com/package/ansi-to-json)

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


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:



## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
