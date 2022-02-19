import { Link } from 'remix'
import GameCard from '../GameCard'
import type { GameList } from '~/types'

export type GamesListProps = {
  games: GameList[]
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
