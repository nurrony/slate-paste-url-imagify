## Slate Paste URL Imagify

[![Greenkeeper badge](https://badges.greenkeeper.io/nmrony/slate-paste-url-imagify.svg)](https://greenkeeper.io/)
[![version][npm-version]][npm-url] [![coding style: standard][standard-svg]][standard-site] [![dependencies][npm-dependencies]][dep-status] [![devDependencies][npm-dev-dependencies]][devdep-status] [![Downloads][npm-total-downloads]][npm-url] [![Travis branch][travis-badge]][travis-url] [![semantic-release][semvarbadge]][npm-url]

A Slate plugin that converts a selection in a image block element when a URL is pasted from the clipboard.

```js
import PasteUrlImagify from 'slate-paste-url-imagify'
import { Editor } from 'slate-react'

// Add the plugin to your set of plugins...
const plugins = [
  PasteUrlImagify()
]

// And later pass it into the Slate editor...
<Editor
  ...
  plugins={plugins}
/>
```

This plugin works by taking in options that specify link-related commands and queries to execute when it detects that the user is trying to insert a link (by pasting or drag-dropping). This way you can define the exact behavior you want in the commands, but delegate the detection of links being inserted to the plugin.

| Option                                                                    | Type     | Description                                                                                                |
| ------------------------------------------------------------------------- | -------- | ---------------------------------------------------------------------------------------------------------- |
| **`insertPastedImage`** (default: `'insertPastedImage'`)                  | `String` | The name of the command that insert image block. It will be passed the `url` of the image as its argument. |
| **`allowedImageTypes`** (default: `['jpg', 'jpeg', 'png', 'gif', 'svg']`) | `Array`  | List of allowed image extensions.                                                                          |

[npm-badge]: https://nodei.co/npm/slate-paste-url-imagify.png?compact=true
[npm-version]: https://img.shields.io/npm/v/slate-paste-url-imagify.svg?style=flat-square
[npm-dependencies]: https://img.shields.io/david/nmrony/slate-paste-url-imagify.svg?style=flat-square
[npm-dev-dependencies]: https://img.shields.io/david/dev/nmrony/slate-paste-url-imagify.svg?style=flat-square
[npm-total-downloads]: https://img.shields.io/npm/dm/slate-paste-url-imagify.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/slate-paste-url-imagify
[dep-status]: https://david-dm.org/nmrony/slate-paste-url-imagify#info=dependencies&view=table
[devdep-status]: https://david-dm.org/nmrony/slate-paste-url-imagify#info=devDependencies&view=table
[standard-svg]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standard-site]: http://standardjs.com
[request-promise]: https://github.com/request/request-promise
[travis-badge]: https://img.shields.io/travis/nmrony/slate-paste-url-imagify/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/nmrony/slate-paste-url-imagify
[semvarbadge]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
