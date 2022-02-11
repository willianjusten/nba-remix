import * as NBAIcons from 'react-nba-logos'

export type TeamLogoProps = {
  team: string
  size?: number
}

function TeamLogo({ team, size }: TeamLogoProps) {
  const Icon = NBAIcons[team as keyof typeof NBAIcons]

  return <Icon size={size} />
}

export default TeamLogo
