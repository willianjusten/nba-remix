import { Team } from '~/types'

/**
 * Method that returns the winner team
 * @param vTeam - The team object
 * @param hTeam - The team object
 * @returns string
 */
export function getWinner(vTeam: Team, hTeam: Team) {
  if (Number(hTeam.score) === Number(vTeam.score)) return null
  return Number(hTeam.score) > Number(vTeam.score) ? 'hTeam' : 'vTeam'
}
