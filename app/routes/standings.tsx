import { useLoaderData } from 'remix'

import Layout from '~/components/Layout'
import StandingTable from '~/components/StandingTable'
import { conferenceMapper } from '~/utils/mappers'

export const loader = async () => {
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
