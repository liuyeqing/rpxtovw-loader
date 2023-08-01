const path = require('path')
const entryOptionPlugin = require('./src/plugins/entry-option-plugin.js')
const UploadDiffServerPlugin = require('upload-diff-server-plugin')
// const UploadDiffServerPlugin = require('./src/plugins/upload-diff-server-plugin.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
console.log(__dirname);
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    resolveLoader: {
        modules: ['node_modules','./src/loaders']
    },
    plugins: [
        new entryOptionPlugin(),
        new UploadDiffServerPlugin(),
        new HtmlWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'less-loader',
                    {
                        loader: 'rpxtovw-loader',
                        // loader: path.join(__dirname, './src/loaders/rpxtovw-loader-liuyeqing.js'),
                        options:{
                            unit: 1920
                        }
                    }
                ]
            }
        ]
    }
}