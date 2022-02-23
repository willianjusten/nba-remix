import TeamLogo from '../TeamLogo'

import { TEAM_NAME } from '~/constants'
import type { Team } from '~/types'

export type TeamInfoProps = {
  team: Team
}

function TeamInfo({ team }: TeamInfoProps) {
  return (
    <div className="flex w-1/4 flex-col items-center text-center">
      <TeamLogo team={team.triCode} size={48} />
      <p className="mt-1 whitespace-nowrap text-sm font-semibold">
        {TEAM_NAME[team.triCode as keyof typeof TEAM_NAME]}
      </p>
      {team.win && team.loss && (
        <p className="text-xs text-gray-400">{`${team.win}-${team.loss}`}</p>
      )}
    </div>
  )
}

export default TeamInfo
