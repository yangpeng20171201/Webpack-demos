const path = require('path');

module.exports = {
  //开发阶段
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.(sc|c|sa)ss$/,
        use: [{
            loader: "style-loader"
          }, {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: true,
              plugins: loader => [
                require('autoprefixer')({ browsers: ['> 0.15% in CN'] }) // 添加前缀
              ]
            }
          },
           {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }]
      }
    ]
  }
};