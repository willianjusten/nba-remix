import { TableCell } from '~/components/Table'

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
  team: {
    ot1: number
    ot2?: number
    ot3?: number
    ot4?: number
    ot5?: number
    ot6?: number
    ot7?: number
  }
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
