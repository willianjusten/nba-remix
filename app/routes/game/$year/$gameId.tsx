import { useLoaderData } from 'remix'
import ArrowIcon from '~/components/ArrowIcon'
import GameCard from '~/components/GameCard'
import GameSummary from '~/components/GameSummary'
import Layout from '~/components/Layout'
import PlayerStats from '~/components/PlayersStats'
import TeamStats from '~/components/TeamStats'

type Params = {
  params: {
    year: string
    gameId: string
  }
}

export const loader = async ({ params }: Params) => {
  const { year, gameId } = params

  const response = await fetch(
    `https://data.nba.com/data/10s/v2015/json/mobile_teams/nba/${year}/scores/gamedetail/${gameId}_gamedetail.json`,
  )

  const { g: game } = await response.json()

  // TODO: Move this to a mapper function
  return {
    game: {
      // This is needed because the NBA API returns the date separated
      startTimeUTC: new Date(`${game.gdtutc} ${game.utctm} UTC`),
      period: game.p,
      clock: game.cl,
      status: game.st,
      vTeam: {
        score: game.vls.s,
        triCode: game.vls.ta,
        ...game.vls,
      },
      hTeam: {
        score: game.hls.s,
        triCode: game.hls.ta,
        ...game.hls,
      },
    },
  }
}

function Game() {
  const { game } = useLoaderData()
  const handleBackButton = () => window.history.back()

  return (
    <Layout>
      <div
        className="flex max-w-fit items-center py-5 transition-all duration-200 hover:cursor-pointer hover:opacity-60"
        onClick={handleBackButton}
      >
        <ArrowIcon size={16} />
        <span className="pl-3 text-xl">Back</span>
      </div>

      <div className="py-5 md:max-w-sm">
        <GameCard
          vTeam={game.vTeam}
          hTeam={game.hTeam}
          clock={game.clock}
          period={game.period}
          startTime={game.startTimeUTC}
          status={game.status}
          details={false}
        />
      </div>

      {game.status === '1' ? (
        <h1>Game has not started</h1>
      ) : (
        <>
          <GameSummary game={game} />

          <div className="flex gap-4 overflow-x-auto md:gap-12 ">
            <PlayerStats team={game.hTeam} />
            <PlayerStats team={game.vTeam} />

            <TeamStats game={game} />
          </div>
        </>
      )}
    </Layout>
  )
}

export default Game
