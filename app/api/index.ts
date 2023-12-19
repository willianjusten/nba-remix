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

  // https://proxy.boxscores.site/?apiUrl=stats.nba.com/stats/scoreboardv3&GameDate=2023-12-18&LeagueID=00
  static async getGamesByDate(date: string | undefined) {
    const response = await fetch(
      `${API_URL.base}/stats/scoreboardv3&GameDate=${date}&LeagueID=00`,
    )
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
