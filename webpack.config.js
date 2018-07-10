const path = require('path')

module.exports = {
    mode: process.env.NODE_ENV || 'production',

    entry: './src/index.js',

    output: {
        filename: 'index.bundle.js',
        path: path.resolve(__dirname, './public')
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            }
        ]
    }
}