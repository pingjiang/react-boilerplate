const assetName = dir => `assets/${dir}/[name].[hash:8].[ext]`;

module.exports = {
  output: {
    publicUrl: '/',
    html: {
      title: 'Awesome app',
    },
    fileNames: {
      // js: assetName('js'),
      // css: assetName('css'),
      font: assetName('fonts'),
      image: assetName('images'),
    },
  },
  pages: {
    index: 'src/index',
  },
  // publicFolder: 'public',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000/api',
      },
    },
  },
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       'react-dom': '@hot-loader/react-dom',
  //     },
  //   },
  // },
  chainWebpack(config) {
    config.resolve.alias.set('react-dom', '@hot-loader/react-dom');

    // remove VUE related
    // config.module.rule('vue').clear();
    // config.module.rule('css').oneOf('vue')
    // config.module.rule('postcss').oneOf('vue-modules')
    // config.module.rule('scss')
    // config.module.rule('less').oneOf('vue')
    // config.module.rule('stylus')
  },
  plugins: [
    {
      resolve: '@poi/plugin-eslint',
    },
    // {
    //   resolve: '@poi/plugin-pwa',
    //   options: {
    //     name: 'PWA app',
    //     themeColor: '#74d7fd',
    //     msTileColor: '#000000',
    //     appleMobileWebAppCapable: 'no',
    //     appleMobileWebAppStatusBarStyle: 'default',
    //     assetsVersion: '',
    //     iconPaths: {
    //       favicon16: 'img/icons/favicon-16x16.png',
    //       favicon32: 'img/icons/favicon-32x32.png',
    //       appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
    //       safariMaskIcon: 'img/icons/safari-mask-icon.svg',
    //       msTileImage: 'img/icons/msapplication-icon-144x144.png'
    //     }
    //   },
    // },
  ],
};
