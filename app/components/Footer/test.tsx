import { render, screen } from '@testing-library/react'

import { Footer } from '.'

describe('<Footer />', () => {
  it('should render correctly', () => {
    render(<Footer />)

    expect(
      screen.getByRole('link', { name: /amazing developers/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /alan gabriel/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /remix\.run/i }),
    ).toBeInTheDocument()
  })
})
