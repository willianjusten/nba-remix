import urljoin from 'url-join'

import type { SocialMetas } from '~/types'

const defaultDomain = 'https://nba-remix.vercel.app/'

export const getSocialMetas = ({
  url,
  title,
  description,
  origin,
  image,
}: SocialMetas) => {
  const parsedImage = image
    ? image
    : urljoin(origin ?? defaultDomain, '/images/og-image.jpg')

  const tags: { [key: string]: string } = {
    url,
    title,
    description,
    image: parsedImage,
    'og:url': url,
    'og:title': title,
    'og:image': parsedImage,
    'og:description': description,
    'og:type': 'website',
    'twitter:card': 'summary_large_image',
    'twitter:creator': '@willianjusten',
    'twitter:site': '@willianjusten',
    'twitter:title': title,
    'twitter:image': parsedImage,
    'twitter:description': description,
    'twitter:alt': title,
  }

  return tags
}

export function removeTrailingSlash(url: string) {
  return url.endsWith('/') ? url.slice(0, -1) : url
}

export function getUrl(requestInfo: { origin: string; pathname: string }) {
  return removeTrailingSlash(
    urljoin(requestInfo.origin ?? defaultDomain, requestInfo.pathname ?? ''),
  )
}
