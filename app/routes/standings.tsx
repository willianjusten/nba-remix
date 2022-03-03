import { useLoaderData } from 'remix'
import type { LoaderFunction, MetaFunction } from 'remix'

import Layout from '~/components/Layout'
import StandingTable from '~/components/StandingTable'

import { conferenceMapper } from '~/utils/mappers'
import { getSocialMetas, getUrl } from '~/utils/seo'

export const meta: MetaFunction = ({ data }) => {
  return getSocialMetas({
    url: getUrl(data.requestInfo),
    origin: data.requestInfo.origin,
    title: 'Standings | NBA Remix',
    description: 'See the current standings for NBA',
  })
}

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url)

  const requestInfo = {
    origin: url.origin,
    pathname: url.pathname,
  }

  const response = await fetch(
    `http://data.nba.net/prod/v1/current/standings_all.json`,
  )

  const {
    league: {
      standard: { teams },
    },
  } = await response.json()

  return {
    east: conferenceMapper(teams, true),
    west: conferenceMapper(teams, false),
    requestInfo,
  }
}

export default function Standings() {
  const { east, west } = useLoaderData()

  return (
    <Layout>
      <StandingTable label="Eastern Conference" conference={east} />
      <StandingTable label="Western Conference" conference={west} />
    </Layout>
  )
}
