import { TableCell } from '~/components/Table'

import type { TeamScore } from '~/types'

export type OvertimeHeadProps = {
  period: number
}

export function OvertimeHead({ period }: OvertimeHeadProps) {
  return period > 4 ? (
    <>
      {Array(period - 4)
        .fill(null)
        .map((_, i) => (
          <TableCell key={i}>OT{i + 1}</TableCell>
        ))}
    </>
  ) : null
}

export type OvertimeScoreProps = {
  period: number
  team: TeamScore
}

export function OvertimeScore({ period, team }: OvertimeScoreProps) {
  return period > 4 ? (
    <>
      {Array(period - 4)
        .fill(null)
        .map((_, i) => (
          <TableCell key={i}>
            {team[`ot${i + 1}` as keyof typeof team]}
          </TableCell>
        ))}
    </>
  ) : null
}
