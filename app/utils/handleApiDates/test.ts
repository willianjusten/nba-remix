import { getDays, getLeagueYear, getTimePeriod } from '.'

// Because NBA season starts from July and ends in May,
// we need to calculate the year of the season based on that
// and not on the current year.

// And because of COVID, the 2020 season was delayed
// so we need to calculate from October

describe('getLeagueYear()', () => {
  it('should return same year if its after May', () => {
    const date = new Date(2021, 7, 1)
    expect(getLeagueYear(date)).toBe(2021)
  })

  it('should return previous year when its before May', () => {
    const date = new Date(2021, 3, 1)
    expect(getLeagueYear(date)).toBe(2020)
  })

  describe('COVID year - 2020', () => {
    it('should return same year if its after September', () => {
      const date = new Date(2020, 10, 1)
      expect(getLeagueYear(date)).toBe(2020)
    })

    it('should return previous year when its before September', () => {
      const date = new Date(2020, 8, 1)
      expect(getLeagueYear(date)).toBe(2019)
    })
  })
})

describe('getTimePeriod()', () => {
  it('should return when the game starts if not started yet', () => {
    const startTime = '2022-02-12T00:00:00.000Z'
    const clock = ''

    expect(getTimePeriod({ startTime, clock })).toEqual('12:00 AM')
  })

  describe('FINAL', () => {
    const startTime = '2022-02-11T00:00:00.000Z'
    const endTime = '2022-02-11T02:28:00.000Z'

    it('should return final when the game already has finished', () => {
      expect(getTimePeriod({ startTime, endTime })).toEqual('Final')
    })

    it('should return final with OT', () => {
      expect(getTimePeriod({ startTime, endTime, period: 6 })).toEqual(
        'Final/OT2',
      )
    })
  })

  describe('Live', () => {
    const startTime = '2022-02-12T00:00:00.000Z'
    const clock = '11:38'

    it('should return the clock and its period when live', () => {
      const period = 2

      expect(getTimePeriod({ startTime, clock, period })).toEqual('Q2 - 11:38')
    })

    it('should return the clock with OT if period bigger than 4', () => {
      const period = 6

      expect(getTimePeriod({ startTime, clock, period })).toEqual('OT2 - 11:38')
    })
  })
})

describe('getDays()', () => {
  it('should return the day, nextDay and prevDay when date is passed', () => {
    const date = '20220214'

    expect(getDays(date)).toEqual({
      day: new Date('2022-02-14T00:00:00.000Z'),
      nextDay: new Date('2022-02-15T00:00:00.000Z'),
      prevDay: new Date('2022-02-13T00:00:00.000Z'),
    })
  })

  it('should return the day, nextDay and prevDay when date is not passed', () => {
    // changing the day to a specific date
    jest.useFakeTimers().setSystemTime(new Date('2021-06-28').getTime())

    expect(getDays()).toEqual({
      day: new Date('2021-06-28T00:00:00.000Z'),
      nextDay: new Date('2021-06-29T00:00:00.000Z'),
      prevDay: new Date('2021-06-27T00:00:00.000Z'),
    })
  })
})
