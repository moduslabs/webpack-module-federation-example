import * as path from "path";
import * as webpack from "webpack";
import { merge } from "webpack-merge";
import base, { ConfigEnv } from "../../webpack.base";

const { ModuleFederationPlugin } = webpack.container;

const config = (env: ConfigEnv): webpack.Configuration =>
  merge(base(env), {
    entry: path.join(__dirname, "index.js"),
    plugins: [
      new ModuleFederationPlugin({
        name: "layout",
        // library: { type: 'var', name: 'layout' },
        filename: "layout.js",
        exposes: {
          "./Layout": path.join(__dirname, "./components/Layout"),
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
      port: 3002,
    },
  });

export default config;
