import { Story, Meta } from '@storybook/react'
import GameSummary, { GameSummaryProps } from '.'

export default {
  title: 'GameSummary',
  component: GameSummary,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta

export const Default: Story<GameSummaryProps> = (args) => (
  <GameSummary {...args} />
)

Default.args = {
  game: {
    period: 6,
    hTeam: {
      ta: 'Team A',
      q1: '10',
      q2: '20',
      q3: '30',
      q4: '40',
      ot1: '12',
      ot2: '13',
    },
    vTeam: {
      ta: 'Team B',
      q1: '10',
      q2: '20',
      q3: '30',
      q4: '40',
      ot1: '12',
      ot2: '13',
    },
  },
}
