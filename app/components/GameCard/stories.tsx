import { Story, Meta } from '@storybook/react'
import GameCard, { GameCardProps } from '.'

export default {
  title: 'GameCard',
  component: GameCard,
} as Meta

export const Default: Story<GameCardProps> = (args) => <GameCard {...args} />

Default.args = {
  clock: '',
  vTeam: {
    triCode: 'GSW',
    win: '44',
    loss: '10',
    score: '130',
  },
  hTeam: {
    triCode: 'PHI',
    win: '32',
    loss: '22',
    score: '109',
  },
}

// TODO: add other possible stories here

// When the game didn't start yet (should show the time it will start)
// When the game is happening (should show the clock)
// When the game already happened (should show final)
