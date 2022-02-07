import { Story, Meta } from '@storybook/react'
import GameCard, { GameCardProps } from '.'

export default {
  title: 'GameCard',
  component: GameCard,
} as Meta

export const Default: Story<GameCardProps> = (args) => <GameCard {...args} />

Default.args = {}
