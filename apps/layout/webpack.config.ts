import * as path from "path";
import * as webpack from "webpack";
import { merge } from "webpack-merge";
import HtmlWebpackPlugin from "html-webpack-plugin";
import base, { ConfigEnv } from "../../webpack.base";

const { ModuleFederationPlugin } = webpack.container;

const config = (env: ConfigEnv): webpack.Configuration =>
  merge(base(env) as webpack.Configuration, {
    entry: path.join(__dirname, "index.js"),
    plugins: [
      new ModuleFederationPlugin({
        name: "layout",
        // library: { type: 'var', name: 'layout' },
        filename: "layout.js",
        exposes: {
          "./Layout": path.join(__dirname, "./src/components/Layout"),
        },
        shared: {
          react: {
            import: "react",
            singleton: true,
          },
          "react-dom": {
            import: "react-dom",
            singleton: true,
          },
        },
      }),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "index.html"),
      }),
    ],
    devServer: {
      contentBase: path.join(__dirname),
      port: 3002,
    },
  });

export default config;
