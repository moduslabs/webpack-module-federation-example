import * as path from 'path';
import * as webpack from 'webpack';
import { merge } from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import base from '../../webpack.base';
import pkg from './package.json';

const { ModuleFederationPlugin } = webpack.container;
const deps = pkg.dependencies;

const config: webpack.Configuration = merge(base, {
  entry: path.join(__dirname, 'index.js'),
  plugins: [
    new ModuleFederationPlugin({
      name: 'core',
      library: { type: 'var', name: 'core' },
      remotes: {
        counter: 'counter',
      },
      exposes: {},
      shared: [
        {
          react: {
            singleton: true,
            requiredVersion: deps.react,
          },
          'react-dom': {
            singleton: true,
            requiredVersion: deps['react-dom'],
          },
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        // prettier-ignore
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname),
    port: 3010,
  },
});

export default config;
