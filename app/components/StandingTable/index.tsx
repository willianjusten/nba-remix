import { Table, TableCell, TableHead } from '~/components/Table'
import TeamLogo from '~/components/TeamLogo'

export type TeamConference = {
  rank: string
  name: string
  code: string
  win: string
  loss: string
  percentage: string
  gamesBehind: string
  homeRecord: string
  awayRecord: string
  lastTenRecord: string
  streak: string
}

export type StandingTableProps = {
  label: string
  conference: TeamConference[]
}

function StandingTable({ label, conference }: StandingTableProps) {
  return (
    <div className="overflow-x-auto py-5">
      <h1 className="text-3xl font-bold text-white">{label}</h1>
      <Table fullWidth>
        <TableHead>
          <tr>
            <TableCell>Rank</TableCell>
            <TableCell>Team</TableCell>
            <TableCell>Win</TableCell>
            <TableCell>Loss</TableCell>
            <TableCell>Win %</TableCell>
            <TableCell>GB</TableCell>
            <TableCell>Home Record</TableCell>
            <TableCell>Road Record</TableCell>
            <TableCell>L10 Streak</TableCell>
            <TableCell>Streak</TableCell>
          </tr>
        </TableHead>
        <tbody>
          {conference.map((team) => (
            <tr key={team.name}>
              <TableCell>{team.rank}</TableCell>
              <TableCell className="flex items-center gap-2">
                <TeamLogo team={team.code} size={32} />
                <span>{team.name}</span>
              </TableCell>
              <TableCell>{team.win}</TableCell>
              <TableCell>{team.loss}</TableCell>
              <TableCell>{team.percentage}</TableCell>
              <TableCell>
                {team.gamesBehind === '0.0' ? '-' : team.gamesBehind}
              </TableCell>
              <TableCell>{team.homeRecord}</TableCell>
              <TableCell>{team.awayRecord}</TableCell>
              <TableCell>{team.lastTenRecord}</TableCell>
              <TableCell>{team.streak}</TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default StandingTable
