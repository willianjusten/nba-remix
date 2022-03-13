import { Table, TableCell } from '~/components/Table'

import type { TeamGroupStatistics } from '~/types'

export type StatisticProps = {
  homeStatistic: string
  visitorStatistic: string
  label: string
}

export function Statistic({
  homeStatistic,
  visitorStatistic,
  label,
}: StatisticProps) {
  return (
    <tr>
      <TableCell>{homeStatistic}</TableCell>
      <TableCell>{label}</TableCell>
      <TableCell>{visitorStatistic}</TableCell>
    </tr>
  )
}

export function TeamStats({ game }: TeamGroupStatistics) {
  return (
    <div>
      <h1 className="text-2xl font-bold">Team Stats</h1>
      <Table>
        <tbody>
          <tr>
            <TableCell className="min-w-[90px] bg-slate-900 font-bold">
              {game.hTeam.tn}
            </TableCell>
            <TableCell className="min-w-[150px] bg-slate-900 font-bold">
              Stats
            </TableCell>
            <TableCell className="min-w-[90px] bg-slate-900 font-bold">
              {game.vTeam.tn}
            </TableCell>
          </tr>

          <Statistic
            homeStatistic={`${game.hTeam.tstsg.fgm} / ${game.hTeam.tstsg.fga}`}
            visitorStatistic={`${game.vTeam.tstsg.fgm} / ${game.vTeam.tstsg.fga}`}
            label="Field Goals"
          />

          <Statistic
            homeStatistic={`${game.hTeam.tstsg.tpm} / ${game.hTeam.tstsg.tpa}`}
            visitorStatistic={`${game.vTeam.tstsg.tpm} / ${game.vTeam.tstsg.tpa}`}
            label="3 Pointers"
          />

          <Statistic
            homeStatistic={`${game.hTeam.tstsg.ftm} / ${game.hTeam.tstsg.fta}`}
            visitorStatistic={`${game.vTeam.tstsg.ftm} / ${game.vTeam.tstsg.fta}`}
            label="Free throws"
          />

          <Statistic
            homeStatistic={game.hTeam.tstsg.reb}
            visitorStatistic={game.vTeam.tstsg.reb}
            label="Total Rebounds"
          />

          <Statistic
            homeStatistic={game.hTeam.tstsg.oreb}
            visitorStatistic={game.vTeam.tstsg.oreb}
            label="Offensive Rebounds"
          />

          <Statistic
            homeStatistic={game.hTeam.tstsg.ast}
            visitorStatistic={game.vTeam.tstsg.ast}
            label="Assists"
          />

          <Statistic
            homeStatistic={game.hTeam.tstsg.blk}
            visitorStatistic={game.vTeam.tstsg.blk}
            label="Blocks"
          />

          <Statistic
            homeStatistic={game.hTeam.tstsg.stl}
            visitorStatistic={game.vTeam.tstsg.stl}
            label="Steals"
          />

          <Statistic
            homeStatistic={game.hTeam.tstsg.tov}
            visitorStatistic={game.vTeam.tstsg.tov}
            label="Turnovers"
          />

          <Statistic
            homeStatistic={game.hTeam.tstsg.pip}
            visitorStatistic={game.vTeam.tstsg.pip}
            label="Points in the paint"
          />

          <Statistic
            homeStatistic={game.hTeam.tstsg.pf}
            visitorStatistic={game.vTeam.tstsg.pf}
            label="Fouls - Personal"
          />
        </tbody>
      </Table>
    </div>
  )
}
