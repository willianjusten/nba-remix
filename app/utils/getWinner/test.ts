import { getWinner } from '.'

describe('getWinner', () => {
  it('should return the winner', () => {
    const vTeam = {
      score: '2',
      triCode: 'LAL',
    }
    const hTeam = {
      score: '1',
      triCode: 'GSW',
    }

    expect(getWinner(vTeam, hTeam)).toBe('vTeam')
  })
})
