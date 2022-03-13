import { Story, Meta } from '@storybook/react'

import { TEAM_NAME } from '~/constants'

import { TeamLogo, TeamLogoProps } from '.'

export default {
  title: 'TeamLogo',
  component: TeamLogo,
  argTypes: {
    team: {
      options: Object.keys(TEAM_NAME),
      control: { type: 'select' },
    },
  },
} as Meta<TeamLogoProps>

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
