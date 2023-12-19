export const DEFAULT_DOMAIN = 'https://nba-remix.vercel.app'

export const API_URL = {
  base: 'https://proxy.boxscores.site/?apiUrl=stats.nba.com',
  details: 'https://data.nba.com/',
}

export const TEAM_NAME = {
  ATL: 'Hawks',
  BKN: 'Nets',
  BOS: 'Celtics',
  CHA: 'Hornets',
  CHI: 'Bulls',
  CLE: 'Cavaliers',
  DAL: 'Mavericks',
  DEN: 'Nuggets',
  DET: 'Pistons',
  GSW: 'Warriors',
  HOU: 'Rockets',
  IND: 'Pacers',
  LAC: 'Clippers',
  LAL: 'Lakers',
  MEM: 'Grizzlies',
  MIA: 'Heat',
  MIL: 'Bucks',
  MIN: 'Timberwolves',
  NOP: 'Pelicans',
  NYK: 'Knicks',
  OKC: 'Thunder',
  ORL: 'Magic',
  PHI: '76ers',
  PHX: 'Suns',
  POR: 'Trail Blazers',
  SAC: 'Kings',
  SAS: 'Spurs',
  TOR: 'Raptors',
  UTA: 'Jazz',
  WAS: 'Wizards',
}

const TEAM_ID = {
  ATL: '1610612737',
  BKN: '1610612751',
  BOS: '1610612738',
  CHA: '1610612766',
  CHI: '1610612741',
  CLE: '1610612739',
  DAL: '1610612742',
  DEN: '1610612743',
  DET: '1610612765',
  GSW: '1610612744',
  HOU: '1610612745',
  IND: '1610612754',
  LAC: '1610612746',
  LAL: '1610612747',
  MEM: '1610612763',
  MIA: '1610612748',
  MIL: '1610612749',
  MIN: '1610612750',
  NOP: '1610612740',
  NYK: '1610612752',
  OKC: '1610612760',
  ORL: '1610612753',
  PHI: '1610612755',
  PHX: '1610612756',
  POR: '1610612757',
  SAC: '1610612758',
  SAS: '1610612759',
  TOR: '1610612761',
  UTA: '1610612762',
  WAS: '1610612764',
}

export const EAST_TEAMS = [
  TEAM_ID.ATL,
  TEAM_ID.BKN,
  TEAM_ID.BOS,
  TEAM_ID.CHA,
  TEAM_ID.CHI,
  TEAM_ID.CLE,
  TEAM_ID.DET,
  TEAM_ID.IND,
  TEAM_ID.MIA,
  TEAM_ID.MIL,
  TEAM_ID.NYK,
  TEAM_ID.ORL,
  TEAM_ID.PHI,
  TEAM_ID.TOR,
  TEAM_ID.WAS,
]

export const WEST_TEAMS = [
  TEAM_ID.DAL,
  TEAM_ID.DEN,
  TEAM_ID.GSW,
  TEAM_ID.HOU,
  TEAM_ID.LAC,
  TEAM_ID.LAL,
  TEAM_ID.MEM,
  TEAM_ID.MIN,
  TEAM_ID.NOP,
  TEAM_ID.OKC,
  TEAM_ID.PHX,
  TEAM_ID.POR,
  TEAM_ID.SAC,
  TEAM_ID.SAS,
  TEAM_ID.UTA,
]

export const COVID_YEAR = 2020
export const COVID_MONTH_END = 9
export const REGULAR_MONTH_END = 5
export const REGULAR_PERIOD_COUNT = 4

export const DATE_DISPLAY_FORMAT = 'dd MMMM yyyy'
export const DATE_LINK_FORMAT = 'yyyy-MM-dd'
export const EST_IANA_ZONE_ID = 'America/New_York'
export const ONE_YEAR_IN_SECONDS = 365 * 24 * 60 * 60

export const TIME_TO_REFETCH = 20000 // 20s
export const TIME_TO_CACHE = 15 // 15s
export const A_YEAR_IN_SECONDS = 3154e7

export const GAME_STATUS = {
  NOT_STARTED: 1,
  IN_PROGRESS: 2,
  ENDED: 3,
}
