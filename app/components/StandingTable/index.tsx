import { Table, TableCell, TableHead } from '~/components/Table'
import { TeamLogo } from '~/components/TeamLogo'

import { TeamConference } from '~/types'

export type StandingTableProps = {
  label: string
  conference: TeamConference[]
}

export function StandingTable({ label, conference }: StandingTableProps) {
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
          {conference.map((team, index) => (
            <tr key={team.name}>
              <TableCell>
                <div
                  className={` rounded-full ${
                    index < 6
                      ? 'bg-green-900'
                      : index < 10
                      ? 'bg-green-600'
                      : ''
                  }`}
                >
                  {team.rank}
                </div>
              </TableCell>
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
      <div className="flex justify-center">
        <div className="mr-6 flex items-center">
          <div className="mr-2 h-5 w-10 rounded-full bg-green-900"></div>
          <span className="text-sm text-gray-400">Playoffs</span>
        </div>
        <div className="flex items-center">
          <div className="mr-2 h-5 w-10 rounded-full bg-green-600"></div>
          <span className="text-sm text-gray-400">Play-In Tournament</span>
        </div>
      </div>
    </div>
  )
}
