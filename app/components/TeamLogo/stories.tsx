import { Story, Meta } from '@storybook/react'
import TeamLogo, { TeamLogoProps } from '.'
import { TEAM_NAME } from '~/constants'

export default {
  title: 'TeamLogo',
  component: TeamLogo,
  argTypes: {
    team: {
      options: Object.keys(TEAM_NAME),
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
