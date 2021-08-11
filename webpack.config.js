const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map', //https://github.com/TypeStrong/ts-loader#devtool--sourcemaps
  entry: './src/client/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: [path.resolve(__dirname, 'src/client')],
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.json',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // {
      //   test: /\.(png|svg|jpg|jpeg|gif)$/i,
      //   type: 'asset/resource',
      // },
    ],
  },
}
