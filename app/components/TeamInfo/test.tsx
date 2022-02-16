import { render, screen } from '@testing-library/react'
import TeamInfo from '.'

const team = {
  score: '',
  triCode: 'LAL',
  win: '26',
  loss: '31',
}

describe('<TeamInfo />', () => {
  it('should render the TeamInfo', () => {
    render(<TeamInfo team={team} />)

    expect(screen.getByTitle(/los angeles lakers/i)).toBeInTheDocument()
    expect(screen.getByText(/los angeles lakers/i)).toBeInTheDocument()
    expect(screen.getByText('26-31')).toBeInTheDocument()
  })
})
