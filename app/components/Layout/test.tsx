import { render, screen } from '@testing-library/react'
import { LinkProps } from 'remix'

import Layout from '.'

jest.mock('remix', () => ({
  Link: ({ children }: LinkProps) => <a href="/">{children}</a>,
  NavLink: ({ children }: LinkProps) => <a href="/">{children}</a>,
  useHref: jest.fn(),
}))

describe('<Layout />', () => {
  it('should render header and children', () => {
    render(
      <Layout>
        <h1>NBA</h1>
      </Layout>,
    )

    expect(screen.getByRole('img', { name: /nba remix/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /nba/i })).toBeInTheDocument()
  })
})
