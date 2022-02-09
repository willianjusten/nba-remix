import { addDays, format, subDays } from 'date-fns'
import { Link, useLoaderData } from 'remix'
import GameCard, { GameCardProps } from '~/components/GameCard'

export const loader = async () => {
  const today = new Date()
  const date = format(today, 'yyyyMMdd')

  const response = await fetch(`http://data.nba.net/prod/v2/${date}/scoreboard.json`)

  return response.json()
}

export default function Index() {
  const date = new Date()
  const prevDay = subDays(date, 1)
  const nextDay = addDays(date, 1)

  const { games } = useLoaderData()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">NBA Games</h1>

          <div className="flex gap-4 py-4">
            <Link to={`/${format(prevDay, 'yyyyMMdd')}`}>&laquo;</Link>
            <p>{format(date, 'dd MMMM yyyy')}</p>
            <Link to={`/${format(nextDay, 'yyyyMMdd')}`}>&raquo;</Link>
          </div>

          <div>
            {games.map(({ seasonYear, gameId, clock, vTeam, hTeam }: GameCardProps) => (
              <Link to={`/game/${seasonYear}/${gameId}`} key={gameId}>
                <GameCard
                  seasonYear={seasonYear}
                  gameId={gameId}
                  clock={clock}
                  vTeam={vTeam}
                  hTeam={hTeam}
                />
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
