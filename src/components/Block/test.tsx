import { render, screen } from '@testing-library/react'
import Block from '.'

describe('<Block />', () => {
  it('renders correctly', () => {
    render(<Block href="link" title="title" description="description" />)

    expect(screen.getByRole('link')).toBeInTheDocument()
    expect(screen.getByText(/title/i)).toBeInTheDocument()
    expect(screen.getByText(/description/i)).toBeInTheDocument()
  })
})
