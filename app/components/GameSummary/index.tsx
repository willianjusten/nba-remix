import { OvertimeHead, OvertimeScore } from '~/components/Overtime'
import { Table, TableCell, TableHead } from '~/components/Table'
import { TeamScore } from '~/types'

export type GameSummaryProps = {
  game: {
    period: number
    hTeam: TeamScore
    vTeam: TeamScore
  }
}

function GameSummary({ game }: GameSummaryProps) {
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

export default GameSummary
