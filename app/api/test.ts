import API from '.'

describe('API', () => {
  it('should return success for getStandings()', async () => {
    const response = await API.getStandings()

    expect(response.data).toHaveProperty('games')
    expect(response.status).toBe(200)
  })

  it('should return success for getGamesByDate(date)', async () => {
    const response = await API.getGamesByDate('20220304')

    expect(response.data).toHaveProperty('games')
    expect(response.status).toBe(200)
  })

  it('should return success for getGameDetails(date, gameId)', async () => {
    const response = await API.getGameDetails('20220304', 'game_id')

    expect(response.data).toHaveProperty('league')
    expect(response.status).toBe(200)
  })
})
