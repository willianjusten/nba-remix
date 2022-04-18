import { useMemo } from 'react'

import cn from 'classnames'

import { GAME_STATUS } from '~/constants'

import { TeamInfo } from '~/components/TeamInfo'

import { getWinner } from '~/utils/getWinner'
import { getTimePeriod } from '~/utils/handleDates'

import type { Game } from '~/types'

export type GameCardProps = Game & {
  details?: boolean
  interactive?: boolean
}

export function GameCard({
  playoffs,
  vTeam,
  hTeam,
  startTime,
  status,
  isHalftime,
  isEndOfPeriod,
  period,
  clock,
  details = true,
  interactive = true,
}: GameCardProps) {
  const winner = useMemo(() => getWinner(vTeam, hTeam), [vTeam, hTeam])

  return (
    <article
      className={cn(
        'flex rounded-lg border border-main bg-glass text-white backdrop-blur-lg duration-300 firefox:bg-slate-750',
        {
          'hover:cursor-pointer hover:bg-slate-700': interactive,
        },
      )}
    >
      <div className="flex w-full flex-col">
        <div className="flex p-6">
          <TeamInfo team={vTeam} isPlayoffs={!!playoffs} />

          <div className="mt-3 flex flex-1">
            {vTeam.score && (
              <p
                className={cn('w-1/3 text-left text-2xl font-bold', {
                  'opacity-50':
                    winner !== 'vTeam' && status === GAME_STATUS.ENDED,
                })}
              >
                {vTeam.score}
              </p>
            )}
            <p className="flex-1 whitespace-nowrap px-3 pt-1.5 text-center uppercase">
              {getTimePeriod({
                startTime,
                status,
                period,
                clock,
                isHalftime,
                isEndOfPeriod,
              })}
              {status == GAME_STATUS.IN_PROGRESS && (
                <span className="mx-auto block pt-2 text-xs tracking-widest">
                  <span className="mr-1 inline-block h-2 w-2 animate-pulse rounded-full bg-red-700"></span>
                  Live
                </span>
              )}

              {playoffs?.seriesSummaryText && (
                <span className="mt-3 block text-center text-xs font-semibold capitalize">
                  {playoffs?.seriesSummaryText}
                </span>
              )}
            </p>

            {hTeam.score && (
              <p
                className={cn('w-1/3 text-right text-2xl font-bold', {
                  'opacity-50':
                    winner !== 'hTeam' && status === GAME_STATUS.ENDED,
                })}
              >
                {hTeam.score}
              </p>
            )}
          </div>

          <TeamInfo team={hTeam} isPlayoffs={!!playoffs} />
        </div>

        {details && (
          <footer className="border-t border-main py-2 text-center text-sm">
            View details
          </footer>
        )}
      </div>
    </article>
  )
}
