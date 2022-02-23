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

function TableCell({ children }: React.PropsWithChildren<{}>) {
  return <td className="border border-slate-500 px-3 py-2">{children}</td>
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

          <div className="flex gap-12 overflow-x-auto py-10 ">
            <div>
              <h1 className="pb-4 text-2xl font-bold">
                {game.hTeam.tc} {game.hTeam.tn}
              </h1>
              <table>
                <thead>
                  <tr>
                    <th>Player</th>
                    <th>Min</th>
                    <th>Reb</th>
                    <th>Ast</th>
                    <th>Pts</th>
                  </tr>
                </thead>
                <tbody>
                  {game.hTeam.pstsg.map((player) => (
                    <tr key={player.id}>
                      <td>{player.fn}</td>
                      <td>{player.min}</td>
                      <td>{player.reb}</td>
                      <td>{player.ast}</td>
                      <td>{player.pts}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div>
              <h1 className="pb-4 text-2xl font-bold">
                {game.vTeam.tc} {game.vTeam.tn}
              </h1>
              <table>
                <thead>
                  <tr>
                    <th>Player</th>
                    <th>Min</th>
                    <th>Reb</th>
                    <th>Ast</th>
                    <th>Pts</th>
                  </tr>
                </thead>
                <tbody>
                  {game.vTeam.pstsg.map((player) => (
                    <tr key={player.id}>
                      <td>{player.fn}</td>
                      <td>{player.min}</td>
                      <td>{player.reb}</td>
                      <td>{player.ast}</td>
                      <td>{player.pts}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div>
              <h1 className="pb-4 text-2xl font-bold">Team Stats</h1>
              <table>
                <tr>
                  <td className="font-bold">{game.hTeam.tn}</td>
                  <td className="text-center">Stats</td>
                  <td className="font-bold">{game.vTeam.tn}</td>
                </tr>

                <tr>
                  <td>
                    {game.hTeam.tstsg.fgm} / {game.hTeam.tstsg.fga}
                  </td>
                  <td>Field Goals</td>
                  <td>
                    {game.vTeam.tstsg.fgm} / {game.vTeam.tstsg.fga}
                  </td>
                </tr>

                <tr>
                  <td>
                    {game.hTeam.tstsg.tpm} / {game.hTeam.tstsg.tpa}
                  </td>
                  <td>3 pointers</td>
                  <td>
                    {game.vTeam.tstsg.tpm} / {game.vTeam.tstsg.tpa}
                  </td>
                </tr>

                <tr>
                  <td>
                    {game.hTeam.tstsg.ftm} / {game.hTeam.tstsg.fta}
                  </td>
                  <td>Free throws</td>
                  <td>
                    {game.vTeam.tstsg.ftm} / {game.vTeam.tstsg.fta}
                  </td>
                </tr>

                <tr>
                  <td>{game.hTeam.tstsg.reb}</td>
                  <td>Total Rebounds</td>
                  <td>{game.vTeam.tstsg.reb}</td>
                </tr>

                <tr>
                  <td>{game.hTeam.tstsg.oreb}</td>
                  <td>Offensive Rebounds</td>
                  <td>{game.vTeam.tstsg.oreb}</td>
                </tr>

                <tr>
                  <td>{game.hTeam.tstsg.ast}</td>
                  <td>Assists</td>
                  <td>{game.vTeam.tstsg.ast}</td>
                </tr>

                <tr>
                  <td>{game.hTeam.tstsg.blk}</td>
                  <td>Blocks</td>
                  <td>{game.vTeam.tstsg.blk}</td>
                </tr>

                <tr>
                  <td>{game.hTeam.tstsg.stl}</td>
                  <td>Steals</td>
                  <td>{game.vTeam.tstsg.stl}</td>
                </tr>

                <tr>
                  <td>{game.hTeam.tstsg.tov}</td>
                  <td>Turnovers</td>
                  <td>{game.vTeam.tstsg.tov}</td>
                </tr>

                <tr>
                  <td>{game.hTeam.tstsg.pip}</td>
                  <td>Points in the paint</td>
                  <td>{game.vTeam.tstsg.pip}</td>
                </tr>

                <tr>
                  <td>{game.hTeam.tstsg.pf}</td>
                  <td>Fouls - Personal</td>
                  <td>{game.vTeam.tstsg.pf}</td>
                </tr>
              </table>
            </div>
          </div>
        </>
      )}
    </Layout>
  )
}

export default Game
