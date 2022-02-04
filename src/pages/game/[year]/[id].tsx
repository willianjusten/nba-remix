import Link from 'next/link'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

export default function GamePage() {
  const router = useRouter()
  const { year, id } = router.query

  const fetchGames = async ({ queryKey }) => {
    const [, { year, id }] = queryKey

    const response = await fetch(
      `https://data.nba.com/data/10s/v2015/json/mobile_teams/nba/${year}/scores/gamedetail/${id}_gamedetail.json`
    )
    return response.json()
  }

  const { data, status } = useQuery(['gameDetail', { year, id }], fetchGames)

  return (
    <div className="p-12">
      {status === 'loading' && <h1>Loading...</h1>}
      {status === 'error' && <h1>Error :(</h1>}

      {status === 'success' && (
        <div>
          <Link href="/">
            <a>Back</a>
          </Link>
          <div className="flex gap-4 py-4">
            <div>
              <h1 className="font-bold">{data.g.vls.ta}</h1>
              <p>{data.g.vls.tn}</p>
              <p>{data.g.vls.s}</p>
            </div>

            <div>
              <h1 className="font-bold">{data.g.hls.ta}</h1>
              <p>{data.g.hls.tn}</p>
              <p>{data.g.hls.s}</p>
            </div>
          </div>

          {data.g.st === '1' ? (
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
                      {data.g.hls.ot1 !== 0 && data.g.vls.ot1 !== 0 && (
                        <th>OT1</th>
                      )}
                      {data.g.hls.ot2 !== 0 && data.g.vls.ot2 !== 0 && (
                        <th>OT2</th>
                      )}
                      {data.g.hls.ot3 !== 0 && data.g.vls.ot3 !== 0 && (
                        <th>OT3</th>
                      )}
                      {data.g.hls.ot4 !== 0 && data.g.vls.ot4 !== 0 && (
                        <th>OT4</th>
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{data.g.hls.ta}</td>
                      <td>{data.g.hls.q1}</td>
                      <td>{data.g.hls.q2}</td>
                      <td>{data.g.hls.q3}</td>
                      <td>{data.g.hls.q4}</td>
                      {data.g.hls.ot1 !== 0 && data.g.vls.ot1 !== 0 && (
                        <td>{data.g.hls.ot1}</td>
                      )}
                      {data.g.hls.ot2 !== 0 && data.g.vls.ot2 !== 0 && (
                        <td>{data.g.hls.ot2}</td>
                      )}
                      {data.g.hls.ot3 !== 0 && data.g.vls.ot3 !== 0 && (
                        <td>{data.g.hls.ot3}</td>
                      )}
                      {data.g.hls.ot4 !== 0 && data.g.vls.ot4 !== 0 && (
                        <td>{data.g.hls.ot4}</td>
                      )}
                    </tr>
                    <tr>
                      <td>{data.g.vls.ta}</td>
                      <td>{data.g.vls.q1}</td>
                      <td>{data.g.vls.q2}</td>
                      <td>{data.g.vls.q3}</td>
                      <td>{data.g.vls.q4}</td>
                      {data.g.hls.ot1 !== 0 && data.g.vls.ot1 !== 0 && (
                        <td>{data.g.vls.ot1}</td>
                      )}
                      {data.g.hls.ot2 !== 0 && data.g.vls.ot2 !== 0 && (
                        <td>{data.g.vls.ot2}</td>
                      )}
                      {data.g.hls.ot3 !== 0 && data.g.vls.ot3 !== 0 && (
                        <td>{data.g.vls.ot3}</td>
                      )}
                      {data.g.hls.ot4 !== 0 && data.g.vls.ot4 !== 0 && (
                        <td>{data.g.vls.ot4}</td>
                      )}
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="flex gap-12 py-10">
                <div>
                  <h1 className="pb-4 text-2xl font-bold">
                    {data.g.hls.tc} {data.g.hls.tn}
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
                      {data.g.hls.pstsg.map((player) => (
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
                    {data.g.vls.tc} {data.g.vls.tn}
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
                      {data.g.vls.pstsg.map((player) => (
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
                      <td className="font-bold">{data.g.hls.tn}</td>
                      <td className="text-center">Stats</td>
                      <td className="font-bold">{data.g.vls.tn}</td>
                    </tr>

                    <tr>
                      <td>
                        {data.g.hls.tstsg.fgm} / {data.g.hls.tstsg.fga}
                      </td>
                      <td>Field Goals</td>
                      <td>
                        {data.g.vls.tstsg.fgm} / {data.g.vls.tstsg.fga}
                      </td>
                    </tr>

                    <tr>
                      <td>
                        {data.g.hls.tstsg.tpm} / {data.g.hls.tstsg.tpa}
                      </td>
                      <td>3 pointers</td>
                      <td>
                        {data.g.vls.tstsg.tpm} / {data.g.vls.tstsg.tpa}
                      </td>
                    </tr>

                    <tr>
                      <td>
                        {data.g.hls.tstsg.ftm} / {data.g.hls.tstsg.fta}
                      </td>
                      <td>Free throws</td>
                      <td>
                        {data.g.vls.tstsg.ftm} / {data.g.vls.tstsg.fta}
                      </td>
                    </tr>

                    <tr>
                      <td>{data.g.hls.tstsg.reb}</td>
                      <td>Total Rebounds</td>
                      <td>{data.g.vls.tstsg.reb}</td>
                    </tr>

                    <tr>
                      <td>{data.g.hls.tstsg.oreb}</td>
                      <td>Offensive Rebounds</td>
                      <td>{data.g.vls.tstsg.oreb}</td>
                    </tr>

                    <tr>
                      <td>{data.g.hls.tstsg.ast}</td>
                      <td>Assists</td>
                      <td>{data.g.vls.tstsg.ast}</td>
                    </tr>

                    <tr>
                      <td>{data.g.hls.tstsg.blk}</td>
                      <td>Blocks</td>
                      <td>{data.g.vls.tstsg.blk}</td>
                    </tr>

                    <tr>
                      <td>{data.g.hls.tstsg.stl}</td>
                      <td>Steals</td>
                      <td>{data.g.vls.tstsg.stl}</td>
                    </tr>

                    <tr>
                      <td>{data.g.hls.tstsg.tov}</td>
                      <td>Turnovers</td>
                      <td>{data.g.vls.tstsg.tov}</td>
                    </tr>

                    <tr>
                      <td>{data.g.hls.tstsg.pip}</td>
                      <td>Points in the paint</td>
                      <td>{data.g.vls.tstsg.pip}</td>
                    </tr>

                    <tr>
                      <td>{data.g.hls.tstsg.pf}</td>
                      <td>Fouls - Personal</td>
                      <td>{data.g.vls.tstsg.pf}</td>
                    </tr>
                  </table>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}
