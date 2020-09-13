'use strict';
const CircularDependencyPlugin = require('circular-dependency-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const path = require('path');
const PATHS = {
  CLIENT_SRC: path.resolve(__dirname, 'client', 'src'),
  CLIENT_DIST: path.resolve(__dirname, 'build', 'public'),
  SERVER_SRC: path.resolve(__dirname, 'server', 'src'),
  SERVER_DIST: path.resolve(__dirname, 'build')
}

module.exports = (env, argv) => {
  const common = {
    mode: env.prod ? 'production' : 'development',
    watch: !env.prod,
    devtool: 'source-map',
    resolve: {
      alias: {
        __cli: PATHS.CLIENT_SRC,
        __ser: PATHS.SERVER_SRC
      },
      extensions: ['.tsx', '.ts', '.js', '.jsx', '.json']
    },
  };

  const commonPlugins = [
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      allowAsyncCycles: false,
      cwd: process.cwd()
    }),
  ];
  
  const commonRules = [];
  
  const client = {
    ...common,
    target: "web",
    entry: path.resolve(PATHS.CLIENT_SRC, 'index.jsx'),
    output: {
      publicPath: '/',
      path: PATHS.CLIENT_DIST,
      filename: env.prod ? '[name].[contenthash].bundle.js' : '[name].bundle.js'
    },
    optimization: {
      moduleIds: 'hashed',
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      }
    },
    module: {
      rules: [
        ...commonRules,
        {
          test: /\.(graphql|gql)$/,
          exclude: /node_modules/,
          loader: 'graphql-tag/loader'
        },
        {
          test: /\.(js|jsx)$/,
          use: 'eslint-loader',
          enforce: 'pre'
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/env', '@babel/preset-react']
            }          
          },
        },
        {
          test: [/\.css$/],
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  ident: 'postcss',
                  plugins: [
                    require('tailwindcss'),
                    require('autoprefixer'),
                  ],  
                },                
              },
            },
          ]
        },
      ]
    },    
    plugins: [
      ...commonPlugins,
      new CopyWebpackPlugin([
        {
          from: path.resolve(PATHS.CLIENT_SRC, 'images'),
          to: path.resolve(PATHS.CLIENT_DIST, 'images'),
          toType: 'dir'
        }
      ]),
      new HtmlWebpackPlugin({ template: path.resolve(PATHS.CLIENT_SRC, 'index.html') }),
    ]  
  };

  const server = {
    ...common,
    target: "node",
    node: {
      __dirname: false
    },
    externals: [nodeExternals()],
    entry: path.resolve(PATHS.SERVER_SRC, 'index.ts'),
    output: {
      publicPath: '/',
      path: PATHS.SERVER_DIST,
      filename: 'server.js'
    },
    module: {
      rules: [
        ...commonRules,
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/
        }    
      ]
    },
    plugins: [
      ...commonPlugins,
    ]      
  };

  return [ client, server ];
};
