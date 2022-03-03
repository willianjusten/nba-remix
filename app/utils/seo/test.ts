import { getSocialMetas, getUrl } from '.'

describe('getSocialMetas', () => {
  it('should return the meta tags for social sharing', () => {
    const tags = getSocialMetas({
      url: 'https://www.nba.com/',
      title: 'NBA Remix',
      description: 'See NBA game results and standings powered by Remix.run',
      image: 'https://i.imgur.com/qZQZxqF.png',
    })

    expect(tags).toEqual({
      url: 'https://www.nba.com/',
      title: 'NBA Remix',
      description: 'See NBA game results and standings powered by Remix.run',
      image: 'https://i.imgur.com/qZQZxqF.png',
      'og:url': 'https://www.nba.com/',
      'og:title': 'NBA Remix',
      'og:image': 'https://i.imgur.com/qZQZxqF.png',
      'og:description':
        'See NBA game results and standings powered by Remix.run',
      'og:type': 'website',
      'twitter:card': 'summary_large_image',
      'twitter:creator': '@willianjusten',
      'twitter:site': '@willianjusten',
      'twitter:title': 'NBA Remix',
      'twitter:image': 'https://i.imgur.com/qZQZxqF.png',
      'twitter:description':
        'See NBA game results and standings powered by Remix.run',
      'twitter:alt': 'NBA Remix',
    })
  })
})

describe('getUrl', () => {
  it('should return the url', () => {
    const url = getUrl({
      origin: 'https://example.com',
      pathname: '/page',
    })

    expect(url).toEqual('https://example.com/page')
  })
})
