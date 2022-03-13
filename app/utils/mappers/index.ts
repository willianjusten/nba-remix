import { EAST_TEAMS, WEST_TEAMS } from '~/constants'
import type { TeamStanding } from '~/types'

export function conferenceMapper(teams: TeamStanding[], isEast: boolean) {
  return teams
    .filter((team) =>
      isEast
        ? EAST_TEAMS.includes(team.teamId)
        : WEST_TEAMS.includes(team.teamId),
    )
    .map((team) => ({
      name: team.teamSitesOnly.teamNickname,
      code: team.teamSitesOnly.teamTricode,
      rank: team.confRank,
      win: team.win,
      loss: team.loss,
      percentage: `${team.winPctV2}%`,
      gamesBehind: team.gamesBehind,
      homeRecord: `${team.homeWin}-${team.homeLoss}`,
      awayRecord: `${team.awayWin}-${team.awayLoss}`,
      lastTenRecord: `${team.lastTenWin}-${team.lastTenLoss}`,
      streak: `${team.isWinStreak ? team.streak : -team.streak}`,
    }))
    .sort((a, b) => +a.rank - +b.rank)
}
