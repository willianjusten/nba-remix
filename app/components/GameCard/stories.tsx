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
  status: 3,
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
  status: 3,
  period: 5,
  clock: '',
  ...teams,
}

export const Halftime: Story<GameCardProps> = (args) => (
  <div style={{ width: '320px' }}>
    <GameCard {...args} />
  </div>
)

Halftime.args = {
  startTime: '2022-02-12T22:00:00.000Z',
  status: 2,
  period: 4,
  isHalftime: true,
  clock: '',
  ...teams,
}

export const EndPeriod: Story<GameCardProps> = (args) => (
  <div style={{ width: '320px' }}>
    <GameCard {...args} />
  </div>
)

EndPeriod.args = {
  startTime: '2022-02-12T22:00:00.000Z',
  status: 2,
  period: 3,
  isEndOfPeriod: true,
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
  status: 1,
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
  status: 2,
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
  status: 2,
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
  status: 2,
  period: 6,
  clock: '4:34',
  ...teams,
  details: false,
}
