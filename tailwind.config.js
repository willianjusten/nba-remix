const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        slate: {
          750: '#293649',
        },
      },
      borderColor: {
        main: 'rgba(255, 255, 255, 0.24)',
      },
      backgroundImage: {
        glass:
          'linear-gradient(262.6deg, rgba(48, 49, 58, 0.5) 0%, rgba(48, 49, 58, 0.3) 101.18%, rgba(48, 49, 58, 0.3) 101.18%);',
        main: "url('/images/nba-logo-blue.svg')",
        teste: "linear-gradient(160deg, rgb(12 43 103 / 30%) 55%, rgb(200 15 46 / 30%) 100%);"
      },
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(300px, 1fr))',
      },
      backdropBlur: {
        bg: '105px',
      },
      background: {
        teste: "linear-gradient(160deg, rgb(12 43 103 / 30%) 55%, rgb(200 15 46 / 30%) 100%);"
      }
    },
  },
  plugins: [
    plugin(function ({ addVariant, e, postcss }) {
      addVariant('firefox', ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: '-moz-document',
          params: 'url-prefix()',
        })
        isFirefoxRule.append(container.nodes)
        container.append(isFirefoxRule)
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(
            `firefox${separator}${rule.selector.slice(1)}`,
          )}`
        })
      })
    }),
  ],
}
