module.exports = {
  title: 'WTFSolidity-web',
  description: 'WTFSolidity 中文站点',
  base: '/',
  themeConfig: {
    nav: [
      { text: 'WTFSolidity', link: 'https://github.com/AmazingAng/WTFSolidity' },
      { text: 'Github', link: 'https://github.com/EasyChris/WTFSolidity-web' },
    ],
    docsDir: '/',
    lastUpdated: 'Last Updated',
  },
  plugins: ['permalink-pinyin', ['autobar', {'pinyinNav': true}], 'rpurl'],
  chainWebpack: (config, isServer) => {
    const inlineLimit = 10000
    config.module.rule('images')
      .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
      .use('url-loader')
        .loader('url-loader')
        .options({
          limit: inlineLimit,
          name: `assets/img/[name].[hash:8].[ext]`
        })
  }
}
