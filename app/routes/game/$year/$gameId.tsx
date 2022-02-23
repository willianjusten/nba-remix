import React from 'react'
import { useLoaderData } from 'remix'
import ArrowIcon from '~/components/ArrowIcon'
import GameCard from '~/components/GameCard'
import Layout from '~/components/Layout'

export const loader = async ({ params }) => {
  const { year, gameId } = params

  const response = await fetch(
    `https://data.nba.com/data/10s/v2015/json/mobile_teams/nba/${year}/scores/gamedetail/${gameId}_gamedetail.json`,
  )

  const { g: game } = await response.json()

  return {
    game: {
      startTimeUTC: game.htm,
      endTimeUTC: game.dur,
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

function Table({ children }: React.PropsWithChildren<{}>) {
  return (
    <table className="my-5 min-w-full border border-slate-600 bg-glass text-center md:min-w-min">
      {children}
    </table>
  )
}

function TableCell({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  // TODO: Refactor to use clx package after
  return (
    <td
      className={`border border-slate-500 px-3 py-2 ${
        className ? className : ''
      }`}
    >
      {children}
    </td>
  )
}

function TableHead({ children }: React.PropsWithChildren<{}>) {
  return <thead className="bg-slate-800">{children}</thead>
}

type OvertimeHeadProps = {
  period: number
}

function OvertimeHead({ period }: OvertimeHeadProps) {
  return period > 4 ? (
    <>
      {Array(period - 4)
        .fill(null)
        .map((_, i) => (
          <TableCell key={i}>OT{i + 1}</TableCell>
        ))}
    </>
  ) : null
}

type OvertimeScoreProps = {
  period: number
  team: {
    ot1: number
    ot2?: number
    ot3?: number
    ot4?: number
    ot5?: number
    ot6?: number
    ot7?: number
  }
}

function OvertimeScore({ period, team }: OvertimeScoreProps) {
  return period > 4 ? (
    <>
      {Array(period - 4)
        .fill(null)
        .map((_, i) => (
          <TableCell key={i}>
            {team[`ot${i + 1}` as keyof typeof team]}
          </TableCell>
        ))}
    </>
  ) : null
}

// TODO: Add types
function GameSummary({ game }) {
  return (
    <div className="py-5">
      <h1 className="text-2xl font-semibold">Game Summary</h1>
      <div className="overflow-x-auto">
        <Table>
          <TableHead>
            <tr className="border border-slate-600">
              <TableCell>Team</TableCell>
              <TableCell>Q1</TableCell>
              <TableCell>Q2</TableCell>
              <TableCell>Q3</TableCell>
              <TableCell>Q4</TableCell>
              <OvertimeHead period={game.period} />
            </tr>
          </TableHead>
          <tbody>
            <tr>
              <TableCell>{game.hTeam.ta}</TableCell>
              <TableCell>{game.hTeam.q1}</TableCell>
              <TableCell>{game.hTeam.q2}</TableCell>
              <TableCell>{game.hTeam.q3}</TableCell>
              <TableCell>{game.hTeam.q4}</TableCell>
              <OvertimeScore period={game.period} team={game.hTeam} />
            </tr>
            <tr>
              <TableCell>{game.vTeam.ta}</TableCell>
              <TableCell>{game.vTeam.q1}</TableCell>
              <TableCell>{game.vTeam.q2}</TableCell>
              <TableCell>{game.vTeam.q3}</TableCell>
              <TableCell>{game.vTeam.q4}</TableCell>
              <OvertimeScore period={game.period} team={game.vTeam} />
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  )
}

// TODO: Add types
function PlayerStats({ team }) {
  return (
    <div>
      <h1 className="pb-4 text-2xl font-bold">
        {team.tc} {team.tn}
      </h1>
      <Table>
        <TableHead>
          <tr>
            <TableCell className="min-w-[135px]">Player</TableCell>
            <TableCell>Min</TableCell>
            <TableCell>Reb</TableCell>
            <TableCell>Ast</TableCell>
            <TableCell>Pts</TableCell>
          </tr>
        </TableHead>
        <tbody>
          {team.pstsg.map((player) => (
            <tr key={player.num}>
              <TableCell>{`${player.fn[0]}. ${player.ln}`}</TableCell>
              <TableCell>{player.min}</TableCell>
              <TableCell>{player.reb}</TableCell>
              <TableCell>{player.ast}</TableCell>
              <TableCell>{player.pts}</TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

// TODO: Add types
function Statistic({ homeStatistic, visitorStatistic, label }) {
  return (
    <tr>
      <TableCell>{homeStatistic}</TableCell>
      <TableCell>{label}</TableCell>
      <TableCell>{visitorStatistic}</TableCell>
    </tr>
  )
}

// TODO: Add types
function TeamStats({ game }) {
  return (
    <div>
      <h1 className="pb-4 text-2xl font-bold">Team Stats</h1>
      <Table>
        <tbody>
          <tr>
            <TableCell className="min-w-[90px]">{game.hTeam.tn}</TableCell>
            <TableCell className="min-w-[150px]">Stats</TableCell>
            <TableCell className="min-w-[90px]">{game.vTeam.tn}</TableCell>
          </tr>

          <Statistic
            homeStatistic={`${game.hTeam.tstsg.fgm} / ${game.hTeam.tstsg.fga}`}
            visitorStatistic={`${game.vTeam.tstsg.fgm} / ${game.vTeam.tstsg.fga}`}
            label="Field Goals"
          />

          <Statistic
            homeStatistic={`${game.hTeam.tstsg.tpm} / ${game.hTeam.tstsg.tpa}`}
            visitorStatistic={`${game.vTeam.tstsg.tpm} / ${game.vTeam.tstsg.tpa}`}
            label="3 Pointers"
          />

          <Statistic
            homeStatistic={`${game.hTeam.tstsg.ftm} / ${game.hTeam.tstsg.fta}`}
            visitorStatistic={`${game.vTeam.tstsg.ftm} / ${game.vTeam.tstsg.fta}`}
            label="Free throws"
          />

          <Statistic
            homeStatistic={game.hTeam.tstsg.reb}
            visitorStatistic={game.vTeam.tstsg.reb}
            label="Total Rebounds"
          />

          <Statistic
            homeStatistic={game.hTeam.tstsg.oreb}
            visitorStatistic={game.vTeam.tstsg.oreb}
            label="Offensive Rebounds"
          />

          <Statistic
            homeStatistic={game.hTeam.tstsg.ast}
            visitorStatistic={game.vTeam.tstsg.ast}
            label="Assists"
          />

          <Statistic
            homeStatistic={game.hTeam.tstsg.blk}
            visitorStatistic={game.vTeam.tstsg.blk}
            label="Blocks"
          />

          <Statistic
            homeStatistic={game.hTeam.tstsg.stl}
            visitorStatistic={game.vTeam.tstsg.stl}
            label="Steals"
          />

          <Statistic
            homeStatistic={game.hTeam.tstsg.tov}
            visitorStatistic={game.vTeam.tstsg.tov}
            label="Turnovers"
          />

          <Statistic
            homeStatistic={game.hTeam.tstsg.pip}
            visitorStatistic={game.vTeam.tstsg.pip}
            label="Points in the paint"
          />

          <Statistic
            homeStatistic={game.hTeam.tstsg.pf}
            visitorStatistic={game.vTeam.tstsg.pf}
            label="Fouls - Personal"
          />
        </tbody>
      </Table>
    </div>
  )
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
          endTime={game.endTimeUTC}
          details={false}
        />
      </div>

      {game.status === '1' ? (
        <h1>Game has not started</h1>
      ) : (
        <>
          <GameSummary game={game} />

          <div className="flex gap-4 overflow-x-auto py-10 md:gap-12 ">
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
