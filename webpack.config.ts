import path from 'path';
import { Configuration } from 'webpack';
import 'webpack-dev-server';

const config: Configuration = {
  entry: './src/App.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // directory where to serve static files from
    },
    port: 3000, // your desired port here
    open: false, // open browser when server starts
    hot: true, // enable hot module replacement
  },
};

export default config;