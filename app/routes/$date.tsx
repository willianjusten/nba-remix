import { addDays, parseISO, subDays } from 'date-fns'
import { useLoaderData, useParams } from 'remix'
import type { LoaderFunction } from 'remix'

import DateSelector from '~/components/DateSelector'
import GamesList from '~/components/GamesList'
import Layout from '~/components/Layout'

export const loader: LoaderFunction = async ({ params }) => {
  const response = await fetch(
    `http://data.nba.net/prod/v2/${params.date}/scoreboard.json`,
  )

  return response.json()
}

export default function Index() {
  const { date } = useParams()

  const day = parseISO(date!)
  const prevDay = subDays(day, 1)
  const nextDay = addDays(day, 1)

  const { games } = useLoaderData()

  return (
    <Layout>
      <DateSelector day={day} prevDay={prevDay} nextDay={nextDay} />

      <GamesList games={games} />
    </Layout>
  )
}
