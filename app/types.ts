export type Team = {
  score?: string
  triCode: string
  win?: string
  loss?: string
}

export type TeamScore = {
  ta: string
  q1: string
  q2: string
  q3: string
  q4: string
  ot1?: string
  ot2?: string
  ot3?: string
  ot4?: string
  ot5?: string
  ot6?: string
  ot7?: string
}

export type TeamPlayerStats = {
  team: {
    tc: string
    tn: string
    ta: string
    pstsg: PlayerStats[]
  }
}

export type PlayerStats = {
  num: string
  fn: string
  ln: string
  min: string
  reb: string
  ast: string
  pts: string
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
