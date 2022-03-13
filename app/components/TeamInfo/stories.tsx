import { Story, Meta } from '@storybook/react'

import { TeamInfo, TeamInfoProps } from '.'

export default {
  title: 'TeamInfo',
  component: TeamInfo,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<TeamInfoProps>

export const Default: Story<TeamInfoProps> = (args) => <TeamInfo {...args} />

Default.args = {
  team: {
    score: '',
    triCode: 'UTA',
    win: '36',
    loss: '21',
  },
}
