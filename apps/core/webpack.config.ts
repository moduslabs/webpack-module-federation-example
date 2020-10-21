import * as path from "path";
import * as webpack from "webpack";
import { merge } from "webpack-merge";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import base, { ConfigEnv, isEnvDev, isEnvProd } from "../../webpack.base";
import pkg from "./package.json";

const { ModuleFederationPlugin } = webpack.container;
const deps = pkg.dependencies;

const config = (env: ConfigEnv): webpack.Configuration =>
  merge(base(env), {
    entry: path.join(__dirname, "index.js"),
    plugins: [
      new ModuleFederationPlugin({
        name: "core",
        library: { type: "var", name: "core" },
        remotes: ["counter", "layout"],
        exposes: {},
        shared: {
          react: {
            singleton: true,
            requiredVersion: deps.react,
          },
          "react-dom": {
            singleton: true,
            requiredVersion: deps["react-dom"],
          },
        },
      }),
      // @ts-ignore
      isEnvProd &&
        new MiniCssExtractPlugin({
          filename: "static/css/[name].[contenthash:8].css",
          chunkFilename: "static/css/[name].[contenthash:8].chunk.css",
        }),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "index.html"),
      }),
    ].filter(Boolean) as webpack.Configuration["plugins"],
    module: {
      rules: [
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            "style-loader",
            isEnvProd && MiniCssExtractPlugin.loader,
            "css-loader",
            "postcss-loader",
          ].filter(Boolean) as webpack.RuleSetUseItem[],
        },
      ],
    },
    devServer: {
      contentBase: path.join(__dirname),
      port: 3010,
    },
  });

export default config;
