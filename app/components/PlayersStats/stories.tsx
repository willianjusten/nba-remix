import { Story, Meta } from '@storybook/react'

import type { TeamPlayerStats } from '~/types'

import { PlayersStats } from '.'

export default {
  title: 'PlayersStats',
  component: PlayersStats,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta<TeamPlayerStats>

export const Default: Story<TeamPlayerStats> = (args) => (
  <PlayersStats {...args} />
)

Default.args = {
  team: {
    tn: 'Team Name',
    tc: 'Team City',
    ta: 'Team Abbreviation',
    pstsg: [
      {
        fn: 'First',
        ln: 'Last',
        num: '2',
        min: '12',
        reb: '4',
        ast: '2',
        pts: '24',
      },
      {
        fn: 'Second',
        ln: 'Last',
        num: '1',
        min: '31',
        reb: '5',
        ast: '12',
        pts: '40',
      },
    ],
  },
}
