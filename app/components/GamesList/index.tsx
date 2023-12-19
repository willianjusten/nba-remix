import { Link } from 'remix'

import { GameCard } from '~/components/GameCard'

import type { GameList } from '~/types'

export type GamesListProps = {
  games: GameList[]
}

export function GamesList({ games }: GamesListProps) {
  return (
    <div className="grid grid-cols-auto-fill gap-5">
      {games.length === 0 ? (
        <h1 className="mt-9 text-center text-3xl font-bold md:col-span-4">
          No Games Today =(
        </h1>
      ) : (
        games.map(
          ({
            gameId,
            gameCode,
            gameTimeUTC,
            gameStatus,
            period,
            gameClock,
            awayTeam,
            homeTeam,
            playoffs,
          }) => (
            <Link
              prefetch="intent"
              to={`/game/${gameCode.slice(0, 4)}/${gameId}`}
              key={gameId}
            >
              <GameCard
                startTime={gameTimeUTC}
                status={gameStatus}
                period={period.current}
                isEndOfPeriod={period.isEndOfPeriod}
                isHalftime={period.isHalftime}
                clock={gameClock}
                vTeam={awayTeam}
                hTeam={homeTeam}
                playoffs={playoffs}
              />
            </Link>
          ),
        )
      )}
    </div>
  )
}
