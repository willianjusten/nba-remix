import { Story, Meta } from '@storybook/react'
import TeamInfo, { TeamInfoProps } from '.'

export const Default: Story<TeamInfoProps> = (args) => <TeamInfo {...args} />

export default {
  title: 'TeamInfo',
  component: TeamInfo,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

Default.args = {
  team: {
    score: '',
    triCode: 'UTA',
    win: '36',
    loss: '21',
  },
}
