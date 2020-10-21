import * as webpack from "webpack";

export type ConfigEnv = {
  [K in Exclude<webpack.Configuration["mode"], undefined>]: boolean;
};

let isEnvProd: boolean,
  isEnvDev: boolean = false;

const stats = {
  assets: true,
  children: false,
  chunks: false,
  hash: false,
  modules: false,
  publicPath: false,
  timings: true,
  version: false,
  warnings: true,
  colors: {
    green: "\u001b[32m",
  },
};

const config = (env: ConfigEnv): webpack.Configuration => {
  isEnvProd = env && env.production;
  isEnvDev = env && !env.production;

  return {
    stats,
    mode: env && env.production ? "production" : "development",
    devtool: env && env.production ? "source-map" : "eval",
    target: "web",
    output: {
      publicPath: "auto",
      filename:
        env && env.production ? "js/[name].[contenthash:8].js" : "js/[name].js",
      chunkFilename:
        env && env.production ? "js/[name].[contenthash:8].js" : "js/[name].js",
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: "babel-loader",
          exclude: /node_modules/,
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      ],
    },
    devServer: {
      stats,
      compress: true,
      hot: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers":
          "X-Requested-With, content-type, Authorization",
      },
    },
  };
};

export default config;

export { isEnvProd, isEnvDev };
