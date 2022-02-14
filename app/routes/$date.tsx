import { addDays, format, parseISO, subDays } from 'date-fns'
import { Link, useLoaderData, useParams } from 'remix'
import GameCard from '~/components/GameCard'
import Layout from '~/components/Layout'

export const loader = async ({ params }) => {
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
      <div className="flex gap-4 py-4">
        <Link to={`/${format(prevDay, 'yyyyMMdd')}`}>&laquo;</Link>
        <p>{format(day, 'dd MMMM yyyy')}</p>
        <Link to={`/${format(nextDay, 'yyyyMMdd')}`}>&raquo;</Link>
      </div>

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
