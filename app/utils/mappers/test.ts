import { conferenceMapper } from '.'

describe('conferenceMapper()', () => {
  const API_DATA = [
    {
      // Western Conference
      teamId: '1610612756',
      win: '48',
      loss: '10',
      winPctV2: '68.3',
      gamesBehind: '0.0',
      confRank: '1',
      homeWin: '26',
      homeLoss: '5',
      awayWin: '22',
      awayLoss: '5',
      lastTenWin: '9',
      lastTenLoss: '1',
      streak: '7',
      isWinStreak: true,
      teamSitesOnly: {
        teamNickname: 'Suns',
        teamTricode: 'PHX',
      },
    },
    {
      // Eastern Conference
      teamId: '1610612748',
      win: '48',
      loss: '10',
      winPctV2: '68.3',
      gamesBehind: '0.0',
      confRank: '1',
      homeWin: '26',
      homeLoss: '5',
      awayWin: '22',
      awayLoss: '5',
      lastTenWin: '9',
      lastTenLoss: '1',
      streak: '7',
      isWinStreak: true,
      teamSitesOnly: {
        teamNickname: 'Heat',
        teamTricode: 'Mia',
      },
    },
  ]

  it('should map west teams to our format', () => {
    expect(conferenceMapper(API_DATA, false)).toEqual([
      {
        name: 'Suns',
        code: 'PHX',
        rank: '1',
        win: '48',
        loss: '10',
        percentage: '68.3%',
        gamesBehind: '0.0',
        homeRecord: '26-5',
        awayRecord: '22-5',
        lastTenRecord: '9-1',
        streak: '7',
      },
    ])
  })

  it('should map east teams to our format', () => {
    expect(conferenceMapper(API_DATA, true)).toEqual([
      {
        name: 'Heat',
        code: 'Mia',
        rank: '1',
        win: '48',
        loss: '10',
        percentage: '68.3%',
        gamesBehind: '0.0',
        homeRecord: '26-5',
        awayRecord: '22-5',
        lastTenRecord: '9-1',
        streak: '7',
      },
    ])
  })
})
