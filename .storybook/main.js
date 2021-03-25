const path = require('path')

module.exports = {
  stories: [
    '../src/components/**/**/*.stories.mdx',
    '../src/components/**/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-essentials', '@storybook/addon-links'],
  webpackFinal: async (baseConfig) => {
    // NOTE: デフォルトのcss-loaderが悪さするので削除
    // https://zenn.dev/tomon9086/articles/a0f3e549b4e848627e3c#main.js-%E3%82%92%E3%81%A4%E3%81%8F%E3%82%8B
    baseConfig.module.rules = [
      ...baseConfig.module.rules.filter(
        (rule) => rule.test.source !== /\.css$/.source,
      ),
    ]

    // NOTE: css-loaderを入れる(postcssこみ)
    baseConfig.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader'],
    })

    // NOTE: tsconfigのbaseUrlの対応
    baseConfig.resolve.modules = [
      path.resolve(__dirname, '..', 'src'),
      'node_modules',
    ]
    return { ...baseConfig }
  },
}
