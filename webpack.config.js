const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
// const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const PATHS = {
  SRC: path.resolve(__dirname, 'src'),
  BUILD: path.resolve(__dirname, 'dist')
};

module.exports = env => {
  const environment = establishEnvironment(env);
  const mode = ['localProd', 'ciProd'].includes(environment) ? 'production' : 'development';
  const isProd = mode === 'production';

  console.info(`Webpack build for environment "${environment}" with mode "${mode}"`);

  // const envPlugin = createEnvVariablesPlugin(environment);

  return {
    target: 'web',
    mode,
    devtool: 'source-map',
    watch: !isProd,
    resolve: {
      extensions: ['.js', '.jsx', '.json']
    },
    entry: path.resolve(PATHS.SRC, 'main', 'index.jsx'),
    output: {
      publicPath: '/',
      path: PATHS.BUILD,
      filename: `[name]${isProd ? '.[contenthash]' : ''}.bundle.js`
    },
    optimization: {
      // https://webpack.js.org/configuration/optimization/#optimizationmoduleids
      // deterministic option is useful for long term caching...
      moduleIds: 'deterministic',
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
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/env'],
              envName: mode
            }
          }
        },
        {
          test: [/\.css$/],
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    plugins: [
      // envPlugin,
      new ESLintPlugin({ extensions: ['js', 'jsx'], fix: true }),
      new CircularDependencyPlugin({
        exclude: /node_modules/,
        allowAsyncCycles: false,
        cwd: process.cwd()
      }),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(PATHS.SRC, 'app', 'images'),
            to: path.resolve(PATHS.BUILD, 'public'),
            toType: 'dir'
          }
        ]
      }),
      new HtmlWebpackPlugin({ template: path.resolve(PATHS.SRC, 'main', 'index.html') })
    ]
  };
};

function establishEnvironment (envArgs) {
  if (envArgs.dev) return 'dev';
  if (envArgs.localProd) return 'localProd';
  if (envArgs.ciProd) return 'ciProd';
  throw new Error('unsupported environment');
}

// function createEnvVariablesPlugin (environment) {
//   switch (environment) {
//     case 'dev': return createPluginToLoadFromEnvDevFile();
//     case 'localProd': return createPluginReducingFromEnvDevFile();
//     case 'ciProd': return createPluginFromEnvInMemory();
//     default: throw new Error('unsupported environment');
//   }
// };

// // new Dotenv({ path: path.resolve(__dirname, '.env') }),

// const envDevFile = path.resolve(process.cwd(), '.env');

// function createPluginToLoadFromEnvDevFile () {
//   console.info(`attempting to inject env vars from "${envDevFile}" file using webpack plugin`);
//   const dotEnvPlugin = new Dotenv({ path: envDevFile });
//   return dotEnvPlugin;
// }

// function createPluginReducingFromEnvDevFile () {
//   console.info(`attempting to inject env vars reducing from "${envDevFile}" file using webpack plugin`);
//   const dotEnvPlugin = new Dotenv({ path: envDevFile });

//   // the removal of emulator env variable is relevant to the productions app
//   // since firebase node sdk automatically attempts connection to emulator host
//   // if variable is set
//   delete dotEnvPlugin.definitions['process.env.FIRESTORE_EMULATOR_HOST'];

//   return dotEnvPlugin;
// }

// function createPluginFromEnvInMemory () {
//   console.info('attempting to inject env vars from memory using webpack plugin');
//   const dotEnvPlugin = new webpack.DefinePlugin({
//     'process.env.SCALE_SERP_KEY': JSON.stringify(process.env.SCALE_SERP_KEY),
//     'process.env.SEND_GRID_KEY': JSON.stringify(process.env.SEND_GRID_KEY),
//     'process.env.DEFAULT_FROM_EMAIL': JSON.stringify(process.env.DEFAULT_FROM_EMAIL)
//   });
//   return dotEnvPlugin;
// }
