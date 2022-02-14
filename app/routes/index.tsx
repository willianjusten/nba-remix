import { format } from 'date-fns'
import { useLoaderData } from 'remix'

import DateSelector from '~/components/DateSelector'
import GamesList from '~/components/GamesList'
import Layout from '~/components/Layout'

import { getDays } from '~/utils/handleApiDates'

export const loader = async () => {
  const today = new Date()
  const date = format(today, 'yyyyMMdd')

  const response = await fetch(
    `http://data.nba.net/prod/v2/${date}/scoreboard.json`,
  )

  return response.json()
}

export default function Index() {
  const { day, prevDay, nextDay } = getDays()
  const { games } = useLoaderData()

  return (
    <Layout>
      <DateSelector day={day} prevDay={prevDay} nextDay={nextDay} />

      <GamesList games={games} />
    </Layout>
  )
}
