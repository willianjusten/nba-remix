import fetch from 'cross-fetch'

import { API_URL } from '~/constants'

class API {
  static async getStandings() {
    const response = await fetch(`${API_URL.base}v1/current/standings_all.json`)
    const data = await response.json()
    return {
      data,
      status: response.status,
    }
  }

  static async getGamesByDate(date: string | undefined) {
    const response = await fetch(`${API_URL.base}v2/${date}/scoreboard.json`)
    const data = await response.json()
    return {
      data,
      status: response.status,
    }
  }

  static async getGameDetails(
    year: string | undefined,
    gameId: string | undefined,
  ) {
    const response = await fetch(
      `${API_URL.details}/data/10s/v2015/json/mobile_teams/nba/${year}/scores/gamedetail/${gameId}_gamedetail.json`,
    )
    const data = await response.json()
    return {
      data,
      status: response.status,
    }
  }
}

// eslint-disable-next-line import/no-default-export
export default API
