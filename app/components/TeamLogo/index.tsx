import * as NBAIcons from 'react-nba-logos'

export type TeamLogoProps = {
  team: string
  size?: number
}

function TeamLogo({ team, size }: TeamLogoProps) {
  const Icon = NBAIcons[team as keyof typeof NBAIcons]

  return Icon ? (
    <Icon size={size} />
  ) : (
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-400 text-xl font-bold text-gray-900">
      {team}
    </div>
  )
}

export default TeamLogo
