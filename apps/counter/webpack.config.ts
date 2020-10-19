import * as path from 'path';
import * as webpack from 'webpack';
import { merge } from 'webpack-merge';
import base from '../../webpack.base';

const { ModuleFederationPlugin } = webpack.container;

const config: webpack.Configuration = merge(base, {
  entry: path.join(__dirname, 'index.js'),
  plugins: [
    new ModuleFederationPlugin({
      name: 'counter',
      // library: { type: 'var', name: 'counter' },
      filename: 'counter.js',
      exposes: {
        './Counter': path.join(__dirname, './components/Counter'),
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname),
    port: 3001,
  },
});

export default config;
