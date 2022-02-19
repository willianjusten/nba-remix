export type Team = {
  score?: string
  triCode: string
  win: string
  loss: string
}

export type Game = {
  startTime: string
  endTime?: string
  period: number
  clock?: string
  vTeam: Team
  hTeam: Team
}

export type GameList = {
  gameId: string
  seasonYear: string
  startTimeUTC: string
  endTimeUTC?: string
  period: {
    current: number
    isHalftime: boolean
    isEndOfPeriod: boolean
  }
  clock?: string
  vTeam: Team
  hTeam: Team
}
