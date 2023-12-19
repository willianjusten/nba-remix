import { TEAM_NAME } from '~/constants'

import { TeamLogo } from '~/components/TeamLogo'

import type { Team } from '~/types'

export type TeamInfoProps = {
  team: Team
  isPlayoffs?: boolean
}

export function TeamInfo({ team, isPlayoffs = false }: TeamInfoProps) {
  const teamCode = team.teamTricode || team.triCode

  return (
    <div className="flex w-1/4 flex-col items-center text-center">
      <TeamLogo team={teamCode!} size={48} />
      <p className="mt-1 whitespace-nowrap text-sm font-semibold">
        {TEAM_NAME[teamCode as keyof typeof TEAM_NAME]}
      </p>
      {!isPlayoffs && team.wins && team.losses && (
        <p className="text-xs text-gray-400">{`${team.wins}-${team.losses}`}</p>
      )}
    </div>
  )
}
