import * as path from "path";
import * as webpack from "webpack";
import { merge } from "webpack-merge";
import base, { ConfigEnv } from "../../webpack.base";

const { ModuleFederationPlugin } = webpack.container;

const config = (env: ConfigEnv): webpack.Configuration =>
  merge(base(env) as webpack.Configuration, {
    entry: path.join(__dirname, "index.js"),
    plugins: [
      new ModuleFederationPlugin({
        name: "counter",
        // library: { type: 'var', name: 'counter' },
        filename: "counter.js",
        exposes: {
          "./Counter": path.join(__dirname, "./src/components/Counter"),
        },
        shared: {
          react: {
            import: false,
            singleton: true,
          },
          "react-dom": {
            import: false,
            singleton: true,
          },
        },
      }),
    ],
    devServer: {
      contentBase: path.join(__dirname),
      port: 3001,
    },
  });

export default config;
