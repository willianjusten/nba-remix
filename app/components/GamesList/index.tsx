import { Link } from 'remix'
import GameCard from '../GameCard'

export type Team = {
  score?: string
  triCode: string
  win: string
  loss: string
}

export type Game = {
  gameId: string
  seasonYear: string
  startTimeUTC: string
  endTimeUTC?: string
  period: {
    current: number
    isHalftime: boolean
    isEndOfPeriod: boolean
  }
  clock?: string
  vTeam: Team
  hTeam: Team
}

export type GamesListProps = {
  games: Game[]
}

function GamesList({ games }: GamesListProps) {
  return (
    <div className="grid grid-cols-auto-fill gap-5">
      {games.length === 0 ? (
        <h1 className="mt-9 text-center text-3xl font-bold md:col-span-4">
          No Games Today =(
        </h1>
      ) : (
        games.map(
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
        )
      )}
    </div>
  )
}

export default GamesList
