import { Link, useLoaderData, useParams } from 'remix'

export const loader = async ({ params }) => {
  const { year, gameId } = params

  const response = await fetch(
    `https://data.nba.com/data/10s/v2015/json/mobile_teams/nba/${year}/scores/gamedetail/${gameId}_gamedetail.json`
  )

  return response.json()
}

function Game() {
  const { g: game } = useLoaderData()

  return (
    <div>
      <Link to="/">Back</Link>
      <div className="flex gap-4 py-4">
        <div>
          <h1 className="font-bold">{game.vls.ta}</h1>
          <p>{game.vls.tn}</p>
          <p>{game.vls.s}</p>
        </div>

        <div>
          <h1 className="font-bold">{game.hls.ta}</h1>
          <p>{game.hls.tn}</p>
          <p>{game.hls.s}</p>
        </div>
      </div>

      {game.st === '1' ? (
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
                  {game.hls.ot1 !== 0 && game.vls.ot1 !== 0 && <th>OT1</th>}
                  {game.hls.ot2 !== 0 && game.vls.ot2 !== 0 && <th>OT2</th>}
                  {game.hls.ot3 !== 0 && game.vls.ot3 !== 0 && <th>OT3</th>}
                  {game.hls.ot4 !== 0 && game.vls.ot4 !== 0 && <th>OT4</th>}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{game.hls.ta}</td>
                  <td>{game.hls.q1}</td>
                  <td>{game.hls.q2}</td>
                  <td>{game.hls.q3}</td>
                  <td>{game.hls.q4}</td>
                  {game.hls.ot1 !== 0 && game.vls.ot1 !== 0 && <td>{game.hls.ot1}</td>}
                  {game.hls.ot2 !== 0 && game.vls.ot2 !== 0 && <td>{game.hls.ot2}</td>}
                  {game.hls.ot3 !== 0 && game.vls.ot3 !== 0 && <td>{game.hls.ot3}</td>}
                  {game.hls.ot4 !== 0 && game.vls.ot4 !== 0 && <td>{game.hls.ot4}</td>}
                </tr>
                <tr>
                  <td>{game.vls.ta}</td>
                  <td>{game.vls.q1}</td>
                  <td>{game.vls.q2}</td>
                  <td>{game.vls.q3}</td>
                  <td>{game.vls.q4}</td>
                  {game.hls.ot1 !== 0 && game.vls.ot1 !== 0 && <td>{game.vls.ot1}</td>}
                  {game.hls.ot2 !== 0 && game.vls.ot2 !== 0 && <td>{game.vls.ot2}</td>}
                  {game.hls.ot3 !== 0 && game.vls.ot3 !== 0 && <td>{game.vls.ot3}</td>}
                  {game.hls.ot4 !== 0 && game.vls.ot4 !== 0 && <td>{game.vls.ot4}</td>}
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex gap-12 py-10">
            <div>
              <h1 className="pb-4 text-2xl font-bold">
                {game.hls.tc} {game.hls.tn}
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
                  {game.hls.pstsg.map((player) => (
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
                {game.vls.tc} {game.vls.tn}
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
                  {game.vls.pstsg.map((player) => (
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
                  <td className="font-bold">{game.hls.tn}</td>
                  <td className="text-center">Stats</td>
                  <td className="font-bold">{game.vls.tn}</td>
                </tr>

                <tr>
                  <td>
                    {game.hls.tstsg.fgm} / {game.hls.tstsg.fga}
                  </td>
                  <td>Field Goals</td>
                  <td>
                    {game.vls.tstsg.fgm} / {game.vls.tstsg.fga}
                  </td>
                </tr>

                <tr>
                  <td>
                    {game.hls.tstsg.tpm} / {game.hls.tstsg.tpa}
                  </td>
                  <td>3 pointers</td>
                  <td>
                    {game.vls.tstsg.tpm} / {game.vls.tstsg.tpa}
                  </td>
                </tr>

                <tr>
                  <td>
                    {game.hls.tstsg.ftm} / {game.hls.tstsg.fta}
                  </td>
                  <td>Free throws</td>
                  <td>
                    {game.vls.tstsg.ftm} / {game.vls.tstsg.fta}
                  </td>
                </tr>

                <tr>
                  <td>{game.hls.tstsg.reb}</td>
                  <td>Total Rebounds</td>
                  <td>{game.vls.tstsg.reb}</td>
                </tr>

                <tr>
                  <td>{game.hls.tstsg.oreb}</td>
                  <td>Offensive Rebounds</td>
                  <td>{game.vls.tstsg.oreb}</td>
                </tr>

                <tr>
                  <td>{game.hls.tstsg.ast}</td>
                  <td>Assists</td>
                  <td>{game.vls.tstsg.ast}</td>
                </tr>

                <tr>
                  <td>{game.hls.tstsg.blk}</td>
                  <td>Blocks</td>
                  <td>{game.vls.tstsg.blk}</td>
                </tr>

                <tr>
                  <td>{game.hls.tstsg.stl}</td>
                  <td>Steals</td>
                  <td>{game.vls.tstsg.stl}</td>
                </tr>

                <tr>
                  <td>{game.hls.tstsg.tov}</td>
                  <td>Turnovers</td>
                  <td>{game.vls.tstsg.tov}</td>
                </tr>

                <tr>
                  <td>{game.hls.tstsg.pip}</td>
                  <td>Points in the paint</td>
                  <td>{game.vls.tstsg.pip}</td>
                </tr>

                <tr>
                  <td>{game.hls.tstsg.pf}</td>
                  <td>Fouls - Personal</td>
                  <td>{game.vls.tstsg.pf}</td>
                </tr>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Game
