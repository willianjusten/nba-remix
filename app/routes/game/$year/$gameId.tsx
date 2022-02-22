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
          <div className="py-10">
            <table>
              <thead>
                <tr>
                  <th>Team</th>
                  <th>Q1</th>
                  <th>Q2</th>
                  <th>Q3</th>
                  <th>Q4</th>
                  {game.hTeam.ot1 !== 0 && game.vTeam.ot1 !== 0 && <th>OT1</th>}
                  {game.hTeam.ot2 !== 0 && game.vTeam.ot2 !== 0 && <th>OT2</th>}
                  {game.hTeam.ot3 !== 0 && game.vTeam.ot3 !== 0 && <th>OT3</th>}
                  {game.hTeam.ot4 !== 0 && game.vTeam.ot4 !== 0 && <th>OT4</th>}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{game.hTeam.ta}</td>
                  <td>{game.hTeam.q1}</td>
                  <td>{game.hTeam.q2}</td>
                  <td>{game.hTeam.q3}</td>
                  <td>{game.hTeam.q4}</td>
                  {game.hTeam.ot1 !== 0 && game.vTeam.ot1 !== 0 && (
                    <td>{game.hTeam.ot1}</td>
                  )}
                  {game.hTeam.ot2 !== 0 && game.vTeam.ot2 !== 0 && (
                    <td>{game.hTeam.ot2}</td>
                  )}
                  {game.hTeam.ot3 !== 0 && game.vTeam.ot3 !== 0 && (
                    <td>{game.hTeam.ot3}</td>
                  )}
                  {game.hTeam.ot4 !== 0 && game.vTeam.ot4 !== 0 && (
                    <td>{game.hTeam.ot4}</td>
                  )}
                </tr>
                <tr>
                  <td>{game.vTeam.ta}</td>
                  <td>{game.vTeam.q1}</td>
                  <td>{game.vTeam.q2}</td>
                  <td>{game.vTeam.q3}</td>
                  <td>{game.vTeam.q4}</td>
                  {game.hTeam.ot1 !== 0 && game.vTeam.ot1 !== 0 && (
                    <td>{game.vTeam.ot1}</td>
                  )}
                  {game.hTeam.ot2 !== 0 && game.vTeam.ot2 !== 0 && (
                    <td>{game.vTeam.ot2}</td>
                  )}
                  {game.hTeam.ot3 !== 0 && game.vTeam.ot3 !== 0 && (
                    <td>{game.vTeam.ot3}</td>
                  )}
                  {game.hTeam.ot4 !== 0 && game.vTeam.ot4 !== 0 && (
                    <td>{game.vTeam.ot4}</td>
                  )}
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex gap-12 py-10">
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
