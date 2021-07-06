const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/app.js' // 아웃풋 이름을 동적으로 생성할 수 있음
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.png$/,
        loader: 'file-loader',
        options: {
          publicPath: './dist/', // 호출경로
          name: '[name].[ext]?[hash]' // 복사할 때 저장할 파일명
        }
      },
      {
        test: /\.png$/,
        use: {
          loader: 'url-loader',
          options: {
            publicPath: './dist/',
            name: '[name].[ext]?[hash]',
            limit: 5000 // 5kb 미만 파일만 data url로 처리
          }
        }
      }
    ]
  }
};
