const MonocoEditorPlugin = require('monaco-editor-webpack-plugin');
const path = require('path');

module.exports = {
  transpileDependencies: ['vuetable-2'],
  configureWebpack: {
    plugins: [
      new MonocoEditorPlugin({
        languages: ['javascript', 'typescript', 'css', 'json'],
      }),
    ],
    resolve: {
      modules: [
        path.resolve(__dirname, 'node_modules'),
        'node_modules',
      ],
      symlinks: false,
    },
    externals: process.env.NODE_ENV === 'production' ? [
      'vue',
      'vuex',
      /^bootstrap\/.+$/,
      /^@processmaker\/.+$/,
      'i18next',
      '@panter/vue-i18next',
    ] : [],
  },
};
