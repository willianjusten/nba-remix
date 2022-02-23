import { render, screen } from '@testing-library/react'
import { OvertimeHead, OvertimeScore } from '.'

describe('OvertimeHead', () => {
  it('renders correctly', () => {
    render(
      <table>
        <thead>
          <tr>
            <OvertimeHead period={6} />
          </tr>
        </thead>
      </table>,
    )

    expect(screen.getByText('OT1')).toBeInTheDocument()
    expect(screen.getByText('OT2')).toBeInTheDocument()
  })

  it('should render nothing when there are no OT', () => {
    render(
      <table>
        <thead>
          <tr>
            <OvertimeHead period={4} />
          </tr>
        </thead>
      </table>,
    )

    expect(screen.queryByText('OT1')).not.toBeInTheDocument()
    expect(screen.queryByText('OT2')).not.toBeInTheDocument()
  })
})

describe('OvertimeScore', () => {
  it('renders correctly', () => {
    const team = {
      ot1: 5,
      ot2: 13,
    }
    render(
      <table>
        <tbody>
          <tr>
            <OvertimeScore period={6} team={team} />
          </tr>
        </tbody>
      </table>,
    )

    expect(screen.getByText('5')).toBeInTheDocument()
    expect(screen.getByText('13')).toBeInTheDocument()
  })

  it('should render nothing when there are no OT', () => {
    const team = {
      ot1: 5,
      ot2: 13,
    }
    render(
      <table>
        <tbody>
          <tr>
            <OvertimeScore period={4} team={team} />
          </tr>
        </tbody>
      </table>,
    )

    expect(screen.queryByText('5')).not.toBeInTheDocument()
    expect(screen.queryByText('13')).not.toBeInTheDocument()
  })
})
