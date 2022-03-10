import { Table, TableCell, TableHead } from '~/components/Table'
import type { PlayerStats, TeamPlayerStats } from '~/types'

function PlayersStats({ team }: TeamPlayerStats) {
  const emptyLabel = '-';
  const teamPstsg = team?.pstsg || [{}];


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
          {teamPstsg.map((player: PlayerStats) => (
            <tr key={player.num}>
              <TableCell className="truncate text-left">
                {player.fn ? `${player.fn[0]}.` : emptyLabel} {player.ln}
              </TableCell>
              <TableCell>{player.min || emptyLabel}</TableCell>
              <TableCell>{player.reb || emptyLabel}</TableCell>
              <TableCell>{player.ast || emptyLabel}</TableCell>
              <TableCell>{player.pts || emptyLabel}</TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default PlayersStats
