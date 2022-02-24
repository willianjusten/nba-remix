import { Table, TableCell, TableHead } from '~/components/Table'
import type { PlayerStats, TeamPlayerStats } from '~/types'

function PlayersStats({ team }: TeamPlayerStats) {
  return (
    <div>
      <h1 className="text-2xl font-bold">
        {team.tc} {team.tn}
      </h1>
      <Table>
        <TableHead>
          <tr>
            <TableCell className="min-w-[120px] text-left sm:min-w-full">
              Player
            </TableCell>
            <TableCell>Min</TableCell>
            <TableCell>Reb</TableCell>
            <TableCell>Ast</TableCell>
            <TableCell>Pts</TableCell>
          </tr>
        </TableHead>
        <tbody>
          {team.pstsg.map((player: PlayerStats) => (
            <tr key={player.num}>
              <TableCell className="truncate text-left">
                {player.fn[0]}. {player.ln}
              </TableCell>
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

export default PlayersStats
