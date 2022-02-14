import { Story, Meta } from '@storybook/react'
import TeamLogo, { TeamLogoProps } from '.'

export default {
  title: 'TeamLogo',
  component: TeamLogo,
  argTypes: {
    team: {
      options: [
        'ATL',
        'BKN',
        'BOS',
        'CHA',
        'CHI',
        'CLE',
        'DAL',
        'DEN',
        'DET',
        'GSW',
        'HOU',
        'IND',
        'LAC',
        'LAL',
        'MEM',
        'MIA',
        'MIL',
        'MIN',
        'NOP',
        'NYK',
        'OKC',
        'ORL',
        'PHI',
        'PHX',
        'POR',
        'SAC',
        'SAS',
        'TOR',
        'UTA',
        'WAS',
      ],
      control: { type: 'select' },
    },
  },
} as Meta

export const Default: Story<TeamLogoProps> = (args) => <TeamLogo {...args} />

Default.args = {
  team: 'GSW',
  size: 300,
}

export const NoLogo: Story<TeamLogoProps> = (args) => <TeamLogo {...args} />

NoLogo.args = {
  team: 'DRT',
  size: 300,
}
