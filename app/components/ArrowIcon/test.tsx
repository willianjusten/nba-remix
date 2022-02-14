import { render, screen } from '@testing-library/react'

import ArrowIcon from '.'

describe('<ArrowIcon />', () => {
  it('should render correctly', () => {
    render(<ArrowIcon aria-label="arrow" />)

    expect(screen.getByLabelText(/arrow/i)).toBeInTheDocument()
  })

  it('should render with different size', () => {
    render(<ArrowIcon aria-label="arrow" size={32} />)

    expect(screen.getByLabelText(/arrow/i)).toHaveAttribute('width', '32')
    expect(screen.getByLabelText(/arrow/i)).toHaveAttribute('height', '32')
  })
})
