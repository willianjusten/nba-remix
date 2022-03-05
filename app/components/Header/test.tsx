import { render, screen } from '@testing-library/react'
import { LinkProps } from 'remix'

import Header from '.'

jest.mock('remix', () => ({
  Link: ({ children }: LinkProps) => <a href="/">{children}</a>,
  NavLink: ({ children }: LinkProps) => <a href="/">{children}</a>,
  useHref: jest.fn(),
}))

describe('<Header />', () => {
  it('should render correctly', () => {
    render(<Header />)

    expect(screen.getByRole('img', { name: /NBA Remix/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /standings/i })).toBeInTheDocument()
  })
})
