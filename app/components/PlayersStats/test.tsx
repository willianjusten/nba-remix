import { render } from '@testing-library/react'

import { PlayersStats } from '.'

describe('<PlayersStats>', () => {
  it('should render correctly', () => {
    const team = {
      tn: 'Team Name',
      tc: 'Team City',
      ta: 'Team Abbreviation',
      pstsg: [
        {
          fn: 'First',
          ln: 'Last',
          num: '2',
          min: '1',
          reb: '2',
          ast: '3',
          pts: '24',
        },
        {
          fn: 'Second',
          ln: 'Last',
          num: '1',
          min: '1',
          reb: '2',
          ast: '3',
          pts: '40',
        },
      ],
    }

    const { container } = render(<PlayersStats team={team} />)

    expect(container).toMatchSnapshot()
  })
})
