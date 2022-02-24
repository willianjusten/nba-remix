import { render, screen } from '@testing-library/react'
import StandingTable from '.'

describe('<StandingTable>', () => {
  it('should render correctly', () => {
    const conference = [
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
    ]

    render(<StandingTable conference={conference} label="Eastern Conference" />)

    expect(
      screen.getByRole('heading', { name: 'Eastern Conference' }),
    ).toBeInTheDocument()

    // table headers
    expect(screen.getByText('Rank')).toBeInTheDocument()
    expect(screen.getByText('Team')).toBeInTheDocument()
    expect(screen.getByText('Win')).toBeInTheDocument()
    expect(screen.getByText('Loss')).toBeInTheDocument()
    expect(screen.getByText('Win %')).toBeInTheDocument()
    expect(screen.getByText('GB')).toBeInTheDocument()
    expect(screen.getByText('Home Record')).toBeInTheDocument()
    expect(screen.getByText('Road Record')).toBeInTheDocument()
    expect(screen.getByText('L10 Streak')).toBeInTheDocument()
    expect(screen.getByText('Streak')).toBeInTheDocument()

    // table rows
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('Heat')).toBeInTheDocument()
    expect(screen.getByText('48')).toBeInTheDocument()
    expect(screen.getByText('10')).toBeInTheDocument()
    expect(screen.getByText('68.3%')).toBeInTheDocument()
    expect(screen.getByText('-')).toBeInTheDocument()
    expect(screen.getByText('26-5')).toBeInTheDocument()
    expect(screen.getByText('22-5')).toBeInTheDocument()
    expect(screen.getByText('9-1')).toBeInTheDocument()
    expect(screen.getByText('7')).toBeInTheDocument()
  })
})
