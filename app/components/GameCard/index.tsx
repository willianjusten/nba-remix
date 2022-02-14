import TeamLogo from '../TeamLogo'

import { TEAM_NAME } from '~/constants'
import { getTimePeriod } from '~/utils/handleApiDates'

export type GameCardProps = {
  startTime: string
  endTime?: string
  period: number
  clock?: string
  // TODO: those types will be moved to use from API types
  vTeam: {
    score?: string
    triCode: string
    win: string
    loss: string
  }
  hTeam: {
    score?: string
    triCode: string
    win: string
    loss: string
  }
}

const GameCard = ({
  vTeam,
  hTeam,
  startTime,
  endTime,
  period,
  clock,
}: GameCardProps) => (
  <article className="flex rounded-lg border border-main bg-glass text-white backdrop-blur-xl duration-300 hover:cursor-pointer hover:bg-slate-700">
    <div className="flex w-full flex-col">
      <div className="flex p-6">
        <div className="flex w-1/4 flex-col items-center text-center">
          <TeamLogo team={vTeam.triCode} size={48} />
          <p className="mt-1 whitespace-nowrap text-sm font-semibold">
            {TEAM_NAME[vTeam.triCode as keyof typeof TEAM_NAME]}
          </p>
          <p className="text-xs text-gray-400">
            {`${vTeam.win}-${vTeam.loss}`}
          </p>
        </div>

        <div className="mt-3 flex flex-1">
          {vTeam.score && (
            <p className="w-1/3 text-left text-2xl font-bold">{vTeam.score}</p>
          )}
          <p className="flex-1 whitespace-nowrap px-3 pt-1.5 text-center uppercase">
            {getTimePeriod({ startTime, endTime, period, clock })}
          </p>
          {hTeam.score && (
            <p className="w-1/3 text-right text-2xl font-bold">{hTeam.score}</p>
          )}
        </div>

        <div className="flex w-1/4 flex-col items-center text-center">
          <TeamLogo team={hTeam.triCode} size={48} />
          <p className="mt-1 whitespace-nowrap text-sm font-semibold">
            {TEAM_NAME[hTeam.triCode as keyof typeof TEAM_NAME]}
          </p>
          <p className="text-xs text-gray-400">
            {`${hTeam.win}-${hTeam.loss}`}
          </p>
        </div>
      </div>

      <footer className="border-t border-main py-2 text-center text-sm">
        View details
      </footer>
    </div>
  </article>
)

export default GameCard
