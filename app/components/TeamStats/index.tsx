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

function TeamStats({ game }: TeamGroupStatistics) {
  const hTeamTstsg = game.hTeam.tstsg || {};
  const vTeamTstsg = game.vTeam.tstsg || {};
  const emptyLabel = '-'

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
            homeStatistic={hTeamTstsg.fgm ? `${hTeamTstsg.fgm} / ${hTeamTstsg.fga}` : emptyLabel}
            visitorStatistic={vTeamTstsg.fgm ? `${vTeamTstsg.fgm} / ${vTeamTstsg.fga}` : emptyLabel}
            label="Field Goals"
          />

          <Statistic
            homeStatistic={hTeamTstsg.tpm ? `${hTeamTstsg.tpm} / ${hTeamTstsg.tpa}` : emptyLabel}
            visitorStatistic={vTeamTstsg.tpm ? `${vTeamTstsg.tpm} / ${vTeamTstsg.tpa}` : emptyLabel}
            label="3 Pointers"
          />

          <Statistic
            homeStatistic={hTeamTstsg.ftm ? `${hTeamTstsg.ftm} / ${hTeamTstsg.fta}` : emptyLabel}
            visitorStatistic={vTeamTstsg.ftm ? `${vTeamTstsg.ftm} / ${vTeamTstsg.fta}` : emptyLabel}
            label="Free throws"
          />

          <Statistic
            homeStatistic={hTeamTstsg.reb || emptyLabel}
            visitorStatistic={vTeamTstsg.reb || emptyLabel}
            label="Total Rebounds"
          />

          <Statistic
            homeStatistic={hTeamTstsg.oreb || emptyLabel}
            visitorStatistic={vTeamTstsg.oreb || emptyLabel}
            label="Offensive Rebounds"
          />

          <Statistic
            homeStatistic={hTeamTstsg.ast || emptyLabel}
            visitorStatistic={vTeamTstsg.ast || emptyLabel}
            label="Assists"
          />

          <Statistic
            homeStatistic={hTeamTstsg.blk || emptyLabel}
            visitorStatistic={vTeamTstsg.blk || emptyLabel}
            label="Blocks"
          />

          <Statistic
            homeStatistic={hTeamTstsg.stl || emptyLabel}
            visitorStatistic={vTeamTstsg.stl || emptyLabel}
            label="Steals"
          />

          <Statistic
            homeStatistic={hTeamTstsg.tov || emptyLabel}
            visitorStatistic={vTeamTstsg.tov || emptyLabel}
            label="Turnovers"
          />

          <Statistic
            homeStatistic={hTeamTstsg.pip || emptyLabel}
            visitorStatistic={vTeamTstsg.pip || emptyLabel}
            label="Points in the paint"
          />

          <Statistic
            homeStatistic={hTeamTstsg.pf || emptyLabel}
            visitorStatistic={vTeamTstsg.pf || emptyLabel}
            label="Fouls - Personal"
          />
        </tbody>
      </Table>
    </div>
  )
}

export default TeamStats
