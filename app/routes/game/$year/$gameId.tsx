import { format } from 'date-fns'
import { useLoaderData } from 'remix'
import type { LoaderFunction, MetaFunction } from 'remix'

import API from '~/api'
import ArrowIcon from '~/components/ArrowIcon'
import GameCard from '~/components/GameCard'
import GameSummary from '~/components/GameSummary'
import GameTables from '~/components/GameTables'
import Layout from '~/components/Layout'
// import PlayerStats from '~/components/PlayersStats'
// import TeamStats from '~/components/TeamStats'

import { DATE_DISPLAY_FORMAT, GAME_STATUS, TIME_TO_REFETCH } from '~/constants'

import useRevalidateOnInterval from '~/hooks/use-revalidate-on-interval'

import { getSocialMetas, getUrl } from '~/utils/seo'

export const meta: MetaFunction = ({ data }) => {
  const date = new Date(data.game.startTimeUTC)
  const vTeamName = data.game.vTeam.tn
  const hTeamName = data.game.hTeam.tn

  return getSocialMetas({
    url: getUrl(data.requestInfo),
    origin: data.requestInfo.origin,
    title: `${vTeamName} x ${hTeamName} | NBA Remix`,
    description: `See ${vTeamName} x ${hTeamName} results for the game on ${format(
      date,
      DATE_DISPLAY_FORMAT,
    )}`,
  })
}
export const loader: LoaderFunction = async ({ params, request }) => {
  const { year, gameId } = params
  const url = new URL(request.url)

  const requestInfo = {
    origin: url.origin,
    pathname: url.pathname,
  }

  const {
    data: { g: game },
  } = await API.getGameDetails(year, gameId)

  // TODO: Move this to a mapper function
  return {
    game: {
      // This is needed because the NBA API returns the date separated
      startTimeUTC: new Date(`${game.gdtutc} ${game.utctm} UTC`),
      period: game.p,
      clock: game.cl,
      status: Number(game.st),
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
    requestInfo,
  }
}

export default function Game() {
  useRevalidateOnInterval({ interval: TIME_TO_REFETCH })

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

      <div className="py-3 px-3 max-w-screen-sm self-center">
        <GameCard
          vTeam={game.vTeam}
          hTeam={game.hTeam}
          clock={game.clock}
          period={game.period}
          startTime={game.startTimeUTC}
          status={game.status}
          details={false}
          interactive={false}
        />
      </div>

      {game.status === GAME_STATUS.NOT_STARTED ? (
        <h1>Game has not started</h1>
      ) : (
        <>
          <GameSummary game={game} />

          <div className="py-3 px-3 max-w-screen-sm">

            <GameTables
              vTeam={game.vTeam}
              hTeam={game.hTeam}
              game={game}
            />

            {/* <PlayerStats team={game.hTeam} />
            <PlayerStats team={game.vTeam} />
            <TeamStats game={game} /> */}

          </div>
        </>
      )}
    </Layout>
  )
}
