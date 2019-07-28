let path = require("path");

module.exports = {
    mode:"production",
    entry:path.join(__dirname,"index.js"),
    output:{
        filename:"myan-num.min.js",
        publicPath:"/dist/"
    }
}