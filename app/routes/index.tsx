import { addDays, format, subDays } from 'date-fns'
import { Link, useLoaderData } from 'remix'
import DateSelector from '~/components/DateSelector'
import GameCard from '~/components/GameCard'
import Layout from '~/components/Layout'

export const loader = async () => {
  const today = new Date()
  const date = format(today, 'yyyyMMdd')

  const response = await fetch(
    `http://data.nba.net/prod/v2/${date}/scoreboard.json`,
  )

  return response.json()
}

export default function Index() {
  const day = new Date()
  const prevDay = subDays(day, 1)
  const nextDay = addDays(day, 1)

  const { games } = useLoaderData()

  return (
    <Layout>
      <DateSelector day={day} prevDay={prevDay} nextDay={nextDay} />

      <div>
        {games.map(
          ({
            seasonYear,
            gameId,
            startTimeUTC,
            endTimeUTC,
            period,
            clock,
            vTeam,
            hTeam,
          }) => (
            <Link to={`/game/${seasonYear}/${gameId}`} key={gameId}>
              <GameCard
                startTime={startTimeUTC}
                endTime={endTimeUTC}
                period={period.current}
                clock={clock}
                vTeam={vTeam}
                hTeam={hTeam}
              />
            </Link>
          ),
        )}
      </div>
    </Layout>
  )
}
