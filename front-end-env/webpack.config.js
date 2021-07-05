const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/app.js' // 아웃풋 이름을 동적으로 생성할 수 있음
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js'
  }
};
