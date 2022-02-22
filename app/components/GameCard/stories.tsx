import { Story, Meta } from '@storybook/react'
import GameCard, { GameCardProps } from '.'

export default {
  title: 'GameCard',
  component: GameCard,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta

const teams = {
  vTeam: {
    triCode: 'PHI',
    win: '44',
    loss: '10',
    score: '130',
  },
  hTeam: {
    triCode: 'MIA',
    win: '32',
    loss: '22',
    score: '109',
  },
}

export const Final: Story<GameCardProps> = (args) => (
  <div style={{ width: '320px' }}>
    <GameCard {...args} />
  </div>
)

Final.args = {
  startTime: '2022-02-12T22:00:00.000Z',
  endTime: '2022-02-13T00:30:00.000Z',
  period: 4,
  clock: '',
  ...teams,
}

export const FinalWithOT: Story<GameCardProps> = (args) => (
  <div style={{ width: '320px' }}>
    <GameCard {...args} />
  </div>
)

FinalWithOT.args = {
  startTime: '2022-02-12T22:00:00.000Z',
  endTime: '2022-02-13T00:30:00.000Z',
  period: 5,
  clock: '',
  ...teams,
}

export const Future: Story<GameCardProps> = (args) => (
  <div style={{ width: '320px' }}>
    <GameCard {...args} />
  </div>
)

Future.args = {
  startTime: '2022-02-14T22:00:00.000Z',
  clock: '',
  vTeam: {
    triCode: 'GSW',
    win: '44',
    loss: '10',
  },
  hTeam: {
    triCode: 'MIA',
    win: '32',
    loss: '22',
  },
}

export const Started: Story<GameCardProps> = (args) => (
  <div style={{ width: '320px' }}>
    <GameCard {...args} />
  </div>
)

Started.args = {
  startTime: '2022-02-14T22:00:00.000Z',
  period: 4,
  clock: '1:34',
  ...teams,
}

export const StartedWithOT: Story<GameCardProps> = (args) => (
  <div style={{ width: '320px' }}>
    <GameCard {...args} />
  </div>
)

StartedWithOT.args = {
  startTime: '2022-02-14T22:00:00.000Z',
  period: 6,
  clock: '4:34',
  ...teams,
}

export const WithoutFooter: Story<GameCardProps> = (args) => (
  <div style={{ width: '320px' }}>
    <GameCard {...args} />
  </div>
)

WithoutFooter.args = {
  startTime: '2022-02-14T22:00:00.000Z',
  period: 6,
  clock: '4:34',
  ...teams,
  details: false,
}
