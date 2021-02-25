# To reproduce


* `npm i` (I used major v6, but v7 should work)
* `npm test` should cause `TypeError: _react.default.createElement is not a function`


It seems that `require('react')` inside the `node_modules/@iconify/react/dist/icon.js`
is referring to itself, not to the real react module.
