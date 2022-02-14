import { useLoaderData, useParams } from 'remix'
import type { LoaderFunction } from 'remix'

import DateSelector from '~/components/DateSelector'
import GamesList from '~/components/GamesList'
import Layout from '~/components/Layout'

import { getDays } from '~/utils/handleApiDates'

export const loader: LoaderFunction = async ({ params }) => {
  const response = await fetch(
    `http://data.nba.net/prod/v2/${params.date}/scoreboard.json`,
  )

  return response.json()
}

export default function Index() {
  const { date } = useParams()
  const { day, prevDay, nextDay } = getDays(date)

  const { games } = useLoaderData()

  return (
    <Layout>
      <DateSelector day={day} prevDay={prevDay} nextDay={nextDay} />

      <GamesList games={games} />
    </Layout>
  )
}
