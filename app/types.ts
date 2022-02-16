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
