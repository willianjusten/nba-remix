import { render } from '@testing-library/react'

import TeamLogo from '.'

describe('<TeamLogo />', () => {
  it('should render the team TeamLogo', () => {
    const { container } = render(<TeamLogo team="GSW" />)

    expect(container.querySelector('svg')).toBeInTheDocument()
  })
})
