import { Story, Meta } from '@storybook/react'

import { StandingTable, StandingTableProps } from '.'

export default {
  title: 'StandingTable',
  component: StandingTable,
} as Meta<StandingTableProps>

export const Default: Story<StandingTableProps> = (args) => (
  <StandingTable {...args} />
)

Default.args = {
  label: 'Eastern Conference',
  conference: [
    {
      name: 'Heat',
      code: 'MIA',
      rank: '1',
      win: '48',
      loss: '10',
      percentage: '68.3%',
      gamesBehind: '0.0',
      homeRecord: '26-5',
      awayRecord: '22-5',
      lastTenRecord: '9-1',
      streak: '7',
    },
  ],
}
