const path = require('path')

module.exports = {
  staticDirs: ['../public'],
  stories: ['../app/components/**/stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-postcss',
      options: {
        cssLoaderOptions: {
          // When you have splitted your css over multiple files
          // and use @import('./other-styles.css')
          importLoaders: 1,
        },
        postcssLoaderOptions: {
          // When using postCSS 8
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: '@storybook/react',
  webpackFinal: (config) => {
    config.resolve.alias['~'] = path.resolve(__dirname, '../app')
    config.resolve.alias['~/utils'] = path.resolve(__dirname, '../app/utils')
    return config
  },
}
