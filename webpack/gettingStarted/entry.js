document.write("It works.");

document.write("<br/>");

document.write(require("./content.js"));


// var afterCss = require("!css!./style.css");
//css-loader 帮助你把  对应的css文档规范化，最小化等

document.write("<br/>");

// document.write(afterCss);



// var afterStyle =require("!style!css!./style2.css");
//而 style-loader 是在将css插入html的style标签中


document.write("<br/>");

// console.log(JSON.stringify(afterStyle));

//也可以不 使用加前缀的方式 比如我这会儿要加载 style2.css

require("./style2.css");

//webpack 命令中加入: --module-bind 'css=style!css'
//Some environments(windows) may require double quotes: –module-bind “css=style!css”
// 这就是webpack提供的   绑定文件拓展名加载器
//bind file extensions to loaders




//使用 webpack.config.js 文件时候   只需要在 cli中敲入： webpack
//其意为：  加载当前路径下面的 webpack.config.js

//webpack 可以加一些配置参数
//比如： --progress --colors -- watch




// development server
// wepack-dev-server 这个捆绑了一个express 服务，默认短空是8080

// npm  install webpack-dev-server -g

// webpack-dev-server --progress --colors

//其实也就是相当于家了一个  watch 模式
