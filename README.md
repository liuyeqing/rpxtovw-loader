# 作用
#### 把css里的rpx转成vw。默认750rpx === 100vw。这个loader可以通过unit参数进行配置，比如，如果需要6400rpx === 100vw，配置unit:6400;如果需要1920rpx === 100vw，配置unit:1920。

# 用法
#### webpack配置
```javascript
module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'rpxtovw-loader',
                        options:{
                            unit: 1920
                        }
                    }
                ]
            }
        ]
    }