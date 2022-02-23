import { Table, TableCell, TableHead } from '~/components/Table'

// TODO: Add types
// TODO: Add Story
// TODO: Add tests
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

export default PlayerStats
