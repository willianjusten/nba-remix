import { render } from '@testing-library/react'
import GameSummary from '.'

describe('<GameSummary>', () => {
  it('should render correctly', () => {
    const game = {
      period: 6,
      hTeam: {
        ta: 'Team A',
        q1: '10',
        q2: '20',
        q3: '30',
        q4: '40',
        ot1: '12',
        ot2: '13',
      },
      vTeam: {
        ta: 'Team B',
        q1: '10',
        q2: '20',
        q3: '30',
        q4: '40',
        ot1: '12',
        ot2: '13',
      },
    }

    const { container } = render(<GameSummary game={game} />)

    // in cases where its a big content
    // its better to use the snapshot testing
    expect(container).toMatchSnapshot()
  })
})
