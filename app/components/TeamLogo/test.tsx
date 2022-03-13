import { render, screen } from '@testing-library/react'

import { TeamLogo } from '.'

describe('<TeamLogo />', () => {
  it('should render the team TeamLogo', () => {
    render(<TeamLogo team="GSW" />)

    expect(screen.getByTitle(/golden state warriors/i)).toBeInTheDocument()
  })

  it('should render the team TeamLogo', () => {
    render(<TeamLogo team="DRT" />)

    expect(screen.getByText(/drt/i)).toBeInTheDocument()
  })
})
