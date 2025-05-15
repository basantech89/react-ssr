module.exports = {
   module: {
    rules: [
      // tell webpack to run babel on every file it runs through
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