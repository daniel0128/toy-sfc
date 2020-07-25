module.exports = {
    entry: './main.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            ['@babel/plugin-transform-react-jsx',
                            {pragma: "create"}]
                        ]
                    }
                },
            },
            {
                test: /\.view$/,
                use: {
                    loader: require.resolve('./myloader.js')
                }
            }
        ]
    },
    // handy when in dev mode
    mode: "development",
    optimization: {
        minimize: false
    }
}