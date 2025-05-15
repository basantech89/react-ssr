const path = require('path');

module.exports = {
  target: 'node',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  // tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        // tell webpack to not run babel on the node_modules folder
        exclude: /node_modules/,
        options: {
          presets: [
            'react', // turn JSX into normal JS function calls
            'stage-0',
            ['env', {
              targets: {
                browsers: ['last 2 versions'],
              },
            }],
          ],
        },
      },
    ],
  }
}
