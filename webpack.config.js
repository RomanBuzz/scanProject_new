const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let config = {
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, "/docs"),
    filename: "bundle.js",
    assetModuleFilename: path.join('assets', '[name][ext]'),
  },
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  plugins: [
    new HtmlWebpackPlugin
      (
        {
          template: "./src/index.html"
        }
      ),
  ],
  resolve: {
    extensions: [".json", ".js", ".jsx", ".css", ".png", ".jpg", ".jpeg", ".gif", ".svg", ".woff", ".woff2", ".eot", ".ttf", ".otf"]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
        ],
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ]
  }
};

module.exports = (env, argv) => {
  if (argv.mode === 'production') {
    config.devServer = {
      static: {
        directory: path.join(__dirname, "/docs"),
      },
      hot: false,
      historyApiFallback: true,
    };
  } else {
    config.mode = "development";
    config.devServer = {
      static: {
        directory: path.join(__dirname, "/docs"),
      },
      hot: true,
      historyApiFallback: true,
    };
    config.devtool = 'inline-source-map';
  }
  return config;
};