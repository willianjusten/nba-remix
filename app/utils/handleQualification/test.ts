import { isPlayin, isPlayoff } from '.'

describe('isPlayoff()', () => {
  it('should return true if it is the first team in the standings', () => {
    expect(isPlayoff(1)).toBeTruthy()
  })
  it('should return false if it is the seventh team in the standings', () => {
    expect(isPlayoff(7)).toBeFalsy()
  })
})

describe('isPlayIn()', () => {
  it('should return false if it is the second team in the standings', () => {
    expect(isPlayin(2)).toBeFalsy()
  })
  it('should return true if it is the ninth team in the standings', () => {
    expect(isPlayin(9)).toBeTruthy()
  })
})
