import { A_YEAR_IN_SECONDS, TIME_TO_CACHE } from '~/constants'

type Options = {
  browser?: number
  cdn?: number
  swr?: number
}
/**
 * Method that returns a cached json response given some cache options
 * @param data - The response data
 * @param {Object} options
 * @param {Object} options.browser - time in seconds for the client's browser to Cache
 * @param {Object} options.cdn - time in seconds for the CDN to Cache
 * @param {Object} options.swr - time in seconds for the server cache to expire
 * @returns Response
 */
export function cachedJson(
  data: Record<string, unknown>,
  {
    browser = 1,
    cdn = TIME_TO_CACHE / 1000, // milliseconds to seconds
    swr = A_YEAR_IN_SECONDS,
  }: Options = {},
): Response {
  return new Response(JSON.stringify(data), {
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': `public, max-age=${browser}, s-maxage=${cdn}, stale-while-revalidate=${swr}`,
    },
  })
}
