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

export type TeamStatistic = {
  tn: string
  tstsg: {
    fgm: string
    fga: string
    tpm: string
    tpa: string
    ftm: string
    fta: string
    blk: string
    reb: string
    oreb: string
    ast: string
    stl: string
    tov: string
    pip: string
    pf: string
  }
}

export type TeamGroupStatistics = {
  game: {
    hTeam: TeamStatistic
    vTeam: TeamStatistic
  }
}

export type TeamPlayerStats = {
  team: {
    tc: string
    tn: string
    ta: string
    pstsg: PlayerStats[]
  }
}

export type TeamStanding = {
  teamSitesOnly: {
    teamNickname: string
    teamTricode: string
  }
  teamId: string
  confRank: string
  win: string
  loss: string
  winPctV2: string
  gamesBehind: string
  homeWin: string
  homeLoss: string
  awayWin: string
  awayLoss: string
  lastTenWin: string
  lastTenLoss: string
  isWinStreak: boolean
  streak: string
}

export type TeamConference = {
  rank: string
  name: string
  code: string
  win: string
  loss: string
  percentage: string
  gamesBehind: string
  homeRecord: string
  awayRecord: string
  lastTenRecord: string
  streak: string
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
  status: number
  period: number
  isHalftime?: boolean
  isEndOfPeriod?: boolean
  clock?: string
  vTeam: Team
  hTeam: Team
}

export type GameList = {
  gameId: string
  seasonYear: string
  startTimeUTC: string
  statusNum: number
  period: {
    current: number
    isHalftime: boolean
    isEndOfPeriod: boolean
  }
  clock?: string
  vTeam: Team
  hTeam: Team
}

export type SocialMetas = {
  url: string
  title: string
  description: string
  origin?: string
  image?: string
}

export type UserPreferences = {
  favoriteTeam: Team | undefined
}
