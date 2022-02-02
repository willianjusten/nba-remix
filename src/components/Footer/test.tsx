import { render, screen } from '@testing-library/react'

import Footer from '.'

describe('<Footer />', () => {
  it('should render correctly', () => {
    render(<Footer />)

    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      'https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
    )

    expect(
      screen.getByRole('img', { name: /vercel logo/i })
    ).toBeInTheDocument()
  })
})
