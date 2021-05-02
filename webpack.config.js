const path = require("path")

//打包规则
module.exports = {
    //入口函数，从哪里开始进行编译打包
    entry: "./src/main.js",
    //编译成功后把内容输出到哪里
    output: {
        //定义输出的指定目录，__dirname表示当前根目录，
        path: path.resolve(__dirname, './dist'),
        // 合并的js文件起一个文件名
        filename: 'bundle.js'
    },
    // 定义css打包规则
    module: {
        rules: [{
            //打包规则应用在所有css结尾的文件
            test: /\.css$/,
            // 用两个插件
            use: ['style-loader', 'css-loader']
        }]
    }
}
