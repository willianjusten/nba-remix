import { render, screen } from '@testing-library/react'

import Header from '.'

describe('<Header />', () => {
  it('should render correctly', () => {
    render(<Header />)

    expect(screen.getByRole('img', { name: /NBA Remix/i })).toBeInTheDocument()
  })
})
