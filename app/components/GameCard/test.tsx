import { render, screen } from '@testing-library/react'
import GameCard from '.'

const game = {
  seasonYear: '2022',
  gameId: 'any_id',
  clock: '',
  vTeam: {
    score: '10',
    triCode: 'PHI',
  },
  hTeam: {
    score: '20',
    triCode: 'MEM',
  },
}

describe('<GameCard />', () => {
  it('renders correctly', () => {
    render(<GameCard {...game} />)

    expect(screen.getByRole('link')).toBeInTheDocument()
    expect(screen.getByText(/title/i)).toBeInTheDocument()
    expect(screen.getByText(/description/i)).toBeInTheDocument()
  })
})
