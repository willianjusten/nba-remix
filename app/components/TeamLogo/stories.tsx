import { Story, Meta } from '@storybook/react'
import TeamLogo, { TeamLogoProps } from '.'

export default {
  title: 'TeamLogo',
  component: TeamLogo,
} as Meta

export const Default: Story<TeamLogoProps> = (args) => <TeamLogo {...args} />

Default.args = {
  team: 'GSW',
  size: 150,
}
