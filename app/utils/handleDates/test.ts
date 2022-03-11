import { getDays, getLeagueYear, getTimePeriod, formatDate, parseDate } from '.'

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

    expect(getTimePeriod({ startTime, status: 1, clock })).toEqual('12:00 AM')
  })

  describe('FINAL', () => {
    const startTime = '2022-02-11T00:00:00.000Z'
    const status = 3

    it('should return final when the game already has finished', () => {
      expect(getTimePeriod({ startTime, status })).toEqual('Final')
    })

    it('should return final with OT', () => {
      expect(getTimePeriod({ startTime, status, period: 6 })).toEqual(
        'Final/OT2',
      )
    })

    it('should return halfime', () => {
      const status = 2
      const isHalftime = true

      expect(getTimePeriod({ startTime, status, isHalftime })).toEqual(
        'Halftime',
      )
    })

    it('should return End of {period}', () => {
      const status = 2
      const period = 3
      const isEndOfPeriod = true

      expect(
        getTimePeriod({ startTime, period, status, isEndOfPeriod }),
      ).toEqual('End of Q3')
    })
  })

  describe('Live', () => {
    const startTime = '2022-02-12T00:00:00.000Z'
    const clock = '11:38'
    const status = 2

    it('should return the clock and its period when live', () => {
      const period = 2

      expect(getTimePeriod({ startTime, status, clock, period })).toEqual(
        'Q2 - 11:38',
      )
    })

    it('should return the clock with OT if period bigger than 4', () => {
      const period = 6

      expect(getTimePeriod({ startTime, status, clock, period })).toEqual(
        'OT2 - 11:38',
      )
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
    jest.useFakeTimers().setSystemTime(new Date('2021-06-28T12:00').getTime())

    expect(getDays()).toEqual({
      day: new Date('2021-06-28T00:00:00.000Z'),
      nextDay: new Date('2021-06-29T00:00:00.000Z'),
      prevDay: new Date('2021-06-27T00:00:00.000Z'),
    })
  })
})

describe('parseDate()', () => {
  const props = {
    str: '10 Mar 2022',
    format: 'dd MMM yyyy',
  }

  it('should return the parsed date', () => {
    expect(parseDate(props.str, props.format)).toEqual(
      new Date('2022-03-10T00:00:00.000Z'),
    )
  })
})

describe('formatDate()', () => {
  const props = {
    date: new Date('2022-03-10T00:00:00.000Z'),
    format: 'dd MMM yyyy',
  }

  it('should return the formated date', () => {
    expect(formatDate(props.date, props.format)).toEqual('10 Mar 2022')
  })
})
