const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

const PATHS = {
  SRC: path.resolve(__dirname, 'src'),
  BUILD: path.resolve(__dirname, 'build')
};

module.exports = env => {
  const isProd = !!env.prod;

  return {
    target: 'web',
    mode: isProd ? 'production' : 'development',
    devtool: 'source-map',
    watch: !isProd,
    resolve: {
      alias: {
        '@': PATHS.SRC
      },
      extensions: ['.js', '.vue', '.json']
    },
    entry: path.resolve(PATHS.SRC, 'main', 'vuetify-firebase.js'),
    output: {
      publicPath: '/',
      path: PATHS.BUILD,
      filename: `[name]${isProd ? '.[contenthash]' : ''}.bundle.js`
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
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/env']
            }
          }
        },
        {
          test: [/\.s(c|a)ss$/],
          use: [
            'vue-style-loader',
            'style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                implementation: require('sass'),
                sassOptions: {
                  indentedSyntax: true
                }
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new ESLintPlugin({ extensions: ['js', 'vue'], fix: true }),
      new CircularDependencyPlugin({
        exclude: /node_modules/,
        allowAsyncCycles: false,
        cwd: process.cwd()
      }),
      new CopyWebpackPlugin([
        {
          from: path.resolve(PATHS.SRC, 'app', 'images'),
          to: path.resolve(PATHS.BUILD, 'public'),
          toType: 'dir'
        }
      ]),
      new HtmlWebpackPlugin({ template: path.resolve(PATHS.SRC, 'interfaces', 'views', 'vuetify', 'index.html') }),
      new Dotenv({ path: path.resolve(__dirname, `env-${isProd ? 'prod' : 'dev'}.env`) }),
      new VueLoaderPlugin(),
      new VuetifyLoaderPlugin()
    ]
  };
};
