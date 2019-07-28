# myan-num
 english-myanmar number convertor

## installation

### using npm
```
npm install --save myan-num
```

### using cdn
```html
<script src="https://unpkg.com/myan-num@latest/dist/myan-num.min.js"></script>
```

## usage
```js
let converter = require("myan-num");
let engWords = converter.convertToEnglish("၁၀.၁+၂၃");
let myanWords = converter.convertToMyanmar("12.4*23.4");
```