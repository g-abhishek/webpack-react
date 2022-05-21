// we need a tool that can take all the files that we have written and combine/bundle them into a single js file
// while keeping track of their dependencies.
// The tool that does this are called "bundlers" and "webpack" is one of the many javascript bundlers!
const path = require("path");
const webpack = require("webpack"); // Module bundler
const HtmlWebpackPlugin = require("html-webpack-plugin"); // it will generate html file for our application

const PORT = process.env.PORT || 3000;

module.exports = {
  // Webpack configuration goes here
  // mode: "development",
  entry: "./src/index.js", // Specifies the entry point of your application; this is where your React app lives and where the bundling process will begin
  output: {
    // Tells Webpack how to write the compiled files to disk
    filename: "chunks-[name].[fullhash].js", //  filename of the bundled application
    publicPath: '/' // Hot reloading won’t work as expected for nested routes without it
  },
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom", // replaces react-dom with the custom react-dom from hot-loader
    }
  },
  devtool: "inline-source-map", // will create source maps to help us with debugging of our application
  module: { // this tells, what type of module our application will include, in our case we will support ESNext(babel) and CSS module
    rules: [ // this tells, how we handle each different type of module
      {
        test: /\.(js)$/,            // test for .js extension file
        exclude: /node_modules/,    // exclude node_modules
        use: ["babel-loader"],      // will use babel and transpile the code into vanilla js
      },
      {
        test: /\.css$/,             // test for .css extension file
        use: [
            "style-loader",
          {                         // here we will instruct "css-loader" t use CSS modules, camel case and create source maps
            loader: "css-loader",   
            options: {
              modules: true,
              importLoaders: 1,
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [ // where we configure the plugins
      new HtmlWebpackPlugin({
          template: "public/index.html",
          favicon: "public/favicon.ico"
      }),
      new webpack.HotModuleReplacementPlugin(), // Prints more readable module names in the browser terminal on HMR updates
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,
        vendors: {
          name: "vendor",
          chunks: "all",
          test: /node_modules/,
        }
      }
    }
  },
  // here we config the development server
  devServer: {
      // host: "localhost",
      // port: PORT,
      historyApiFallback: true,   // We set historyApiFallback to true and open to true // This will open the browser automatically and launch your application in http://localhost:3000. 
      open: true,
      hot: true, // Enable HMR on the server
  }
};
