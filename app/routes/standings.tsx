import { useLoaderData } from 'remix'
import type { LoaderFunction, MetaFunction } from 'remix'

import API from '~/api'

import { Layout } from '~/components/Layout'
import { StandingTable } from '~/components/StandingTable'

import { cachedJson } from '~/utils/cachedJson'
import { conferenceMapper } from '~/utils/mappers'
import { getSocialMetas, getUrl } from '~/utils/seo'

import { TeamConference } from '~/types'

export const meta: MetaFunction = ({ data }) => {
  return getSocialMetas({
    url: getUrl(data.requestInfo),
    origin: data.requestInfo.origin,
    title: 'Standings | NBA Remix',
    description: 'See the current standings for NBA',
  })
}

export type LoaderData = {
  east: TeamConference[]
  west: TeamConference[]
  requestInfo: RequestInfo
}

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url)

  const requestInfo = {
    origin: url.origin,
    pathname: url.pathname,
  }

  const { data } = await API.getStandings()

  const {
    league: {
      standard: { teams },
    },
  } = data

  return cachedJson(
    {
      east: conferenceMapper(teams, true),
      west: conferenceMapper(teams, false),
      requestInfo,
    },
    { browser: 60, cdn: 600 },
  )
}

export default function Standings() {
  const { east, west } = useLoaderData<LoaderData>()

  return (
    <Layout>
      <StandingTable label="Eastern Conference" conference={east} />
      <StandingTable label="Western Conference" conference={west} />
    </Layout>
  )
}
