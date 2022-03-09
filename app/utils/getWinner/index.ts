import { Team } from '~/types'

export const getWinner = (vTeam: Team, hTeam: Team) => {
  if (Number(hTeam.score) === Number(vTeam.score)) return null
  return Number(hTeam.score) > Number(vTeam.score) ? 'hTeam' : 'vTeam'
}
