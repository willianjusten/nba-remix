import urljoin from 'url-join'

import { DEFAULT_DOMAIN } from '~/constants'

import type { SocialMetas } from '~/types'

/**
 * Returns a object of social metas
 * @param url - the url of the page
 * @param title - the title of the page
 * @param description - the description of the page
 * @param origin - the origin of the page
 * @param image - the image of the page
 * @returns object
 */
export function getSocialMetas({
  url,
  title,
  description,
  origin,
  image,
}: SocialMetas) {
  const parsedImage = image
    ? image
    : urljoin(origin ?? DEFAULT_DOMAIN, '/images/og-image.jpg')

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

/**
 * Returns the canonical URL
 * @param url - The url of the page
 * @returns string
 */
export function removeTrailingSlash(url: string) {
  return url.endsWith('/') ? url.slice(0, -1) : url
}

/**
 * Returns the current url of the request
 * @param requestInfo - The request info object
 * @returns string
 */
export function getUrl(requestInfo: { origin: string; pathname: string }) {
  return removeTrailingSlash(
    urljoin(requestInfo.origin ?? DEFAULT_DOMAIN, requestInfo.pathname ?? ''),
  )
}
